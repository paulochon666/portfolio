$CSVFile = "C:\Script\liste-profs-iut-valide-2425.csv"
$CSVData = Import-Csv -Path $CSVFile -Delimiter ";" -Encoding UTF8
$CheminServeur = "\\10.100.100.231\IUTo-private\Professeur"
$Compteur = 0 

Foreach($row in $CSVData) {
    $UtilisateurPrenom = $row.PRENOM
    $UtilisateurNom = $row.NOM
    $UtilisateurLogin = $row.Login
    $UtilisateurMdp = $row.Mdp
    $UtilisateurEmail = $row.Mail
    $UtilisateurChemin = $row.Chemin
    $UtilisateurDes = $row.description 
    $Groupe = "Professeur"
  


   

    # Vérifier si l'utilisateur existe déjà
    $userExists = Get-ADUser -Filter {SamAccountName -eq $UtilisateurLogin}

    if (-not $userExists) {
        New-ADUser -Name "$UtilisateurNom $UtilisateurPrenom" -SamAccountName $UtilisateurLogin `
        -UserPrincipalName "$UtilisateurLogin@IUT-O45.fr" `
        -GivenName $UtilisateurPrenom `
        -Surname $UtilisateurNom `
        -AccountPassword (ConvertTo-SecureString -AsPlainText $UtilisateurMdp -Force) `
        -EmailAddress $UtilisateurEmail `
        -Path $UtilisateurChemin `
        -Description $UtilisateurDes -Enabled $true 

        Add-ADGroupMember -Identity $Groupe -Members $Utilisateurlogin

        $Compteur++

       
    } else {
        Write-Host "L'utilisateur $UtilisateurLogin existe déjà."
    }
}
Write-Output "Nombre total d'utilisateur créés : $Compteur"
