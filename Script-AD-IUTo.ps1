$CSVFile = "C:\Script\IUT.csv"
$CSVData = Import-Csv -Path $CSVFile -Delimiter ";" -Encoding UTF8
$CheminServeur = "\\10.100.100.231\Private\Etudiant"
$Compteur = 0 

Foreach($row in $CSVData) {
    $UtilisateurPrenom = $row.Prenom
    $UtilisateurNom = $row.Nom
    $UtilisateurLogin = $row.Identifiant
    $UtilisateurMdp = $row.Mdp
    $UtilisateurEmail = $row.mail
    $UtilisateurChemin = $row.Chemin
    $UtilisateurGroupe = $row.Groupe
   




    # Vérifier si l'utilisateur existe déjà
    $userExists = Get-ADUser -Filter {SamAccountName -eq $UtilisateurLogin}

    if (-not $userExists) {
        New-ADUser -Name "$UtilisateurNom $UtilisateurPrenom" -SamAccountName $UtilisateurLogin `
        -UserPrincipalName "$UtilisateurLogin@IUT-O45.fr" `
        -GivenName $UtilisateurPrenom `
        -Surname $UtilisateurNom `
        -AccountPassword (ConvertTo-SecureString -AsPlainText $UtilisateurMdp -Force) `
        -EmailAddress $UtilisateurEmail `
        -Path "OU=temp , DC=IUT-O45, DC=fr" `
        -Enabled $true 


        Add-ADGroupMember -Identity $UtilisateurGroupe -Members $Utilisateurlogin
        Write-Host "L'utilisateur $UtilisateurLogin a été créer ."

        $compteur++
       

        
       
    } else {
        Write-Host "L'utilisateur $UtilisateurLogin existe déjà."
    }
}
Write-Output "Nombre total d'utilisateur créés : $Compteur"



  


  


  

           

 