$CSVFile = "C:\Script\IUT.csv"
$CSVData = Import-Csv -Path $CSVFile -Delimiter ";" -Encoding UTF8
$Compteur = 0 

Foreach($row in $CSVData) {
    $UtilisateurLogin = $row.Identifiant
    $UtilisateurChemin = $row.Chemin

    # Vérifier si l'utilisateur existe déjà
    $user = Get-ADUser -Filter {SamAccountName -eq $UtilisateurLogin}

    if($user) {
        #Déplacer l'utilisateur dans la bonne OU 
        Move-ADObject -Identity $user.DistinguishedName -TargetPath $UtilisateurChemin
        Write-Host "L'utilisateur $UtilisateurLogin a été déplacé dans $UtilisateurChemin ."
        $compteur++ 
     } else { 
        Write-Host "L'utilisateur $UtilisateurLogin n'existe pas" 
        } 
    }
Write-Output "Nombre total d'utilisateurs déplacés: $Compteur"