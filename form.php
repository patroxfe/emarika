<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $imie_nazwisko = $_POST['imie_nazwisko'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefon = $_POST['telefon'] ?? '';
    $strona_internetowa = $_POST['strona_internetowa'] ?? '';
    $opis_dzialalnosci = $_POST['opis_dzialalnosci'] ?? '';
    $konkurencja = $_POST['konkurencja'] ?? '';
    $social_media = $_POST['social_media'] ?? '';
    $content = $_POST['content'] ?? '';
    $logo = $_POST['logo'] ?? '';

    // Połączenie z bazą danych
    $servername = "localhost"; //                       TUTAJ PILNOWAĆ
    $username = "nazwa_uzytkownika"; //                 TUTAJ PILNOWAĆ
    $password = "haslo"; //                             TUTAJ PILNOWAĆ
    $dbname = "nazwa_bazy_danych"; //                   TUTAJ PILNOWAĆ

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Błąd połączenia z bazą danych: " . $conn->connect_error);
    }

    // Wstawianie danych do bazy danych
    $sql = "INSERT INTO klient (imie_nazwisko, email, telefon, strona_internetowa, opis_dzialalnosci, konkurencja, social_media, content, logo)
            VALUES ('$imie_nazwisko', '$email', '$telefon', '$strona_internetowa', '$opis_dzialalnosci', '$konkurencja', '$social_media', '$content', '$logo')";

    if ($conn->query($sql) === TRUE) {
        // Tworzenie wiadomości e-mail
        $to = "rafaldruzba@op.pl";
        $subject = "Nowe zgłoszenie od $imie_nazwisko";
        $message = "Imię i nazwisko: $imie_nazwisko\n";
        $message .= "Email: $email\n";
        $message .= "Telefon: $telefon\n";
        $message .= "Adres strony internetowej: $strona_internetowa\n";
        $message .= "Opis działalności i oczekiwania: $opis_dzialalnosci\n";
        $message .= "Konkurencja: $konkurencja\n";
        $message .= "Posiada konto firmowe w social media: $social_media\n";
        $message .= "Dostarczy content: $content\n";
        $message .= "Posiada logo: $logo\n";

        // Wysyłanie e-maila
        $headers = "From: $email";
        if (mail($to, $subject, $message, $headers)) {
            // E-mail został wysłany pomyślnie
            echo "Wiadomość została wysłana. Dziękujemy!";
        } else {
            // Błąd podczas wysyłania e-maila
            echo "Wystąpił błąd podczas wysyłania wiadomości.";
        }
    } else {
        echo "Błąd: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    // Obsługa sytuacji, gdy skrypt jest wywoływany bez formularza
    echo "Błąd: Nieprawidłowe wywołanie skryptu.";
}
?>
