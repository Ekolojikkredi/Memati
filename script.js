// Sayfa içeriğini dinamik olarak değiştiren fonksiyon
function showPage(page) {
    switch(page) {
        case 'ekolojik-kredi':
            document.getElementById("page-content").innerHTML = `
                <div id="ekolojik-kredi">
                    <h2>Ekolojik Kredi Nedir?</h2>
                    <p>Ekolojik kredi, çevre dostu davranışları ödüllendiren bir sistemdir. Atıkların doğru şekilde ayrıştırılması ve geri dönüşüm süreçlerine katkı sağlanması, bireylere belirli kredi puanları kazandırır. Bu kredi puanları, çeşitli ödüller ve avantajlarla değiştirilebilir. Bu sistem, çevre bilincini artırmak ve sürdürülebilir bir yaşam tarzını teşvik etmek amacıyla geliştirilmiştir.</p>
                </div>
            `;
            break;
        case 'hazirlayanlar':
            document.getElementById("page-content").innerHTML = `
                <div id="hazirlayanlar">
                    <h2>Hazırlayanlar</h2>
                    <p>Danışman Öğretmen: Osman Onuk</p>
                    <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
                </div>
            `;
            break;
        case 'geri-donusum':
            document.getElementById("page-content").innerHTML = `
                <div id="geri-donusum">
                    <h2>Geri Dönüşüm Nedir?</h2>
                    <p>Geri dönüşüm, atık maddelerin yeniden işlenerek hammaddeye dönüştürülmesi sürecidir. Bu işlem, doğal kaynakların korunmasına yardımcı olur, enerji tasarrufu sağlar ve çevre kirliliğini azaltır. Geri dönüşüm, bireysel olarak başlanabilecek basit bir alışkanlık olsa da, toplumsal anlamda büyük farklar yaratabilir. Her atık, geri dönüşüm sürecine girmeye layıktır!</p>
                </div>
            `;
            break;
        case 'bize-ulasin':
            document.getElementById("page-content").innerHTML = `
                <div id="bize-ulasin">
                    <h2>Bize Ulaşın</h2>
                    <p>Email: ekolojikkreditubitak@gmail.com</p>
                    <p>Adres: Torbalı Anadolu Lisesi, İzmir</p>
                    <p>YouTube Kanalı: <a href="https://www.youtube.com/channel/UCXXXXXX" target="_blank">Ekolojik Kredi YouTube Kanalı</a></p>
                </div>
            `;
            break;
        case 'kayit':
            document.getElementById("page-content").innerHTML = `
                <div id="kayit">
                    <h2>Kayıt Ol</h2>
                    <form id="student-form">
                        <label for="name">Ad:</label><br>
                        <input type="text" id="name" name="name"><br>
                        <label for="surname">Soyad:</label><br>
                        <input type="text" id="surname" name="surname"><br>
                        <label for="school-number">Okul Numarası:</label><br>
                        <input type="text" id="school-number" name="school-number"><br>
                        <label for="email">E-posta:</label><br>
                        <input type="email" id="email" name="email"><br>
                        <label for="phone">Telefon Numarası:</label><br>
                        <input type="tel" id="phone" name="phone"><br>
                        <label for="school-name">Okul Adı:</label><br>
                        <input type="text" id="school-name" name="school-name"><br>
                        <label for="class">Sınıf:</label><br>
                        <input type="text" id="class" name="class"><br>
                        <label for="city">İl:</label><br>
                        <input type="text" id="city" name="city"><br>
                        <label for="district">İlçe:</label><br>
                        <input type="text" id="district" name="district"><br>
                        <button type="submit">Kaydol</button>
                    </form>
                </div>
            `;
            break;
        case 'veri-giris':
            document.getElementById("page-content").innerHTML = `
                <div id="veri-giris">
                    <h2>Veri Girişi</h2>
                    <form>
                        <label for="student-name">Öğrenci Adı:</label><br>
                        <input type="text" id="student-name" name="student-name"><br>
                        <label for="student-surname">Öğrenci Soyadı:</label><br>
                        <input type="text" id="student-surname" name="student-surname"><br>
                        <label for="school-number">Okul Numarası:</label><br>
                        <input type="text" id="school-number" name="school-number"><br>
                        <label for="waste-type">Atık Türü:</label><br>
                        <input type="text" id="waste-type" name="waste-type"><br>
                        <label for="waste-weight">Atık Kilogramı:</label><br>
                        <input type="number" id="waste-weight" name="waste-weight"><br>
                        <label for="recorded-by">Kaydeden Kişi:</label><br>
                        <input type="text" id="recorded-by" name="recorded-by"><br>
                        <button type="submit">Veri Kaydet</button>
                    </form>
                </div>
            `;
            break;
        case 'veri-goruntuleme':
            document.getElementById("page-content").innerHTML = `
                <div id="veri-goruntuleme">
                    <h2>Veri Görüntüleme</h2>
                    <form>
                        <label for="student-email">E-posta:</label><br>
                        <input type="email" id="student-email" name="student-email"><br>
                        <label for="student-school-number">Okul Numarası:</label><br>
                        <input type="text" id="student-school-number" name="student-school-number"><br>
                        <button type="submit">Göster</button>
                    </form>
                    <div id="student-info">
                        <!-- Burada öğrenci bilgileri ve atık puanları görüntülenecek -->
                    </div>
                </div>
            `;
            break;
        default:
            document.getElementById("page-content").innerHTML = `
                <h2>Hoşgeldiniz</h2>
                <p>Burada Ekolojik Kredi Sistemi ile ilgili bilgileri bulabilir, kayıt olabilir, verilerinizi görüntüleyebilir ve veri girişi yapabilirsiniz.</p>
            `;
            break;
    }
}

// Kayıt formunun işlevselliğini kontrol etme
document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Formun sayfayı yeniden yüklemesini engeller

    // Öğrenci verilerini al
    const studentData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        schoolNumber: document.getElementById('school-number').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        schoolName: document.getElementById('school-name').value,
        class: document.getElementById('class').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value
    };

    // Burada verileri saklamak ve işlemi tamamlamak gerekir.
    console.log('Öğrenci Kayıt Verisi:', studentData);

    alert('Kayıt Başarıyla Gerçekleşti!');
    showPage('kayit');  // Kayıt tamamlandığında, tekrar ana sayfaya yönlendirme
});

// Veri giriş formunun işlevselliğini kontrol etme
document.getElementById('veri-giris').addEventListener('submit', function(e) {
    e.preventDefault();  // Formun sayfayı yeniden yüklemesini engeller

    // Veri girişini al
    const entryData = {
        studentName: document.getElementById('student-name').value,
        studentSurname: document.getElementById('student-surname').value,
        schoolNumber: document.getElementById('school-number').value,
        wasteType: document.getElementById('waste-type').value,
        wasteWeight: document.getElementById('waste-weight').value,
        recordedBy: document.getElementById('recorded-by').value
    };

    // Burada veriyi kaydetmek için işlem yapılabilir
    console.log('Veri Giriş Verisi:', entryData);

    alert('Veri Başarıyla Kaydedildi!');
    showPage('veri-giris');  // Veri kaydedildikten sonra ana sayfaya yönlendir
});

// Veri görüntüleme formunun işlevselliği
document.getElementById('veri-goruntuleme').addEventListener('submit', function(e) {
    e.preventDefault();  // Formun sayfayı yeniden yüklemesini engeller

    // Öğrenci bilgilerini al
    const email = document.getElementById('student-email').value;
    const schoolNumber = document.getElementById('student-school-number').value;

    // Burada öğrenci bilgilerini veritabanından alabiliriz
    // Örnek olarak, öğrenci bilgilerini konsola yazdırıyoruz
    console.log('E-posta:', email);
    console.log('Okul Numarası:', schoolNumber);

    // Öğrenci bilgilerini ve atık puanlarını gösteren örnek veri
    const studentInfo = {
        name: "Muhammedcan Arslanparçası",
        surname: "Arslanparçası",
        schoolNumber: "12345",
        wastePoints: 50,
        previousSubmissions: [
            { wasteType: "Kağıt", weight: 2, points: 10 },
            { wasteType: "Plastik", weight: 3, points: 15 },
        ]
    };

    // Öğrenci bilgilerini ekrana yazdırma
    const studentInfoDiv = document.getElementById('student-info');
    studentInfoDiv.innerHTML = `
        <h3>Öğrenci Bilgileri:</h3>
        <p>Adı: ${studentInfo.name}</p>
        <p>Soyadı: ${studentInfo.surname}</p>
        <p>Okul Numarası: ${studentInfo.schoolNumber}</p>
        <p>Atık Puanı: ${studentInfo.wastePoints}</p>
        <h4>Önceki Teslimatlar:</h4>
        <ul>
            ${studentInfo.previousSubmissions.map(submission => `
                <li>${submission.wasteType} - ${submission.weight} kg - ${submission.points} puan</li>
            `).join('')}
        </ul>
    `;
});
