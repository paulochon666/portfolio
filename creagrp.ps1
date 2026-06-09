# Liste des groupes à créer
$groupes = @(
    "Etudiants", "Professeur", "Intervenant",
    "CHIMIE", "CHIMIE1", "CHIMIE2", "CHIMIE3",
    "QLIO", "QLIO1", "QLIO2", "QLIO3",
    "INFO", "INFO1", "INFO2", "INFO3",
    "GTE", "GTE1", "GTE2", "GTE3",
    "GMP", "GMP1", "GMP2", "GMP3",
    "GEA", "GEA1", "GEA2", "GEA3"
)

# Boucle pour créer chaque groupe
foreach ($groupe in $groupes) {
    New-ADGroup -Name $groupe -GroupScope Global -Path "OU=Groups,DC=IUT-O45,DC=fr"
    Write-Output "Groupe créé : $groupe"
}
