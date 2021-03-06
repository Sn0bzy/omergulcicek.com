import React, { Component }     from "react";
import turkLirasi               from "../turkLirasi.svg";

export default class Sozlesme extends Component {
    render() {
        const Lira = <img src={turkLirasi} alt="Türk Lirası" />;
        const Var = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4CAF50" height="16"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>;
        const Yok = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="#F44336" height="16"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>;
        return (
            <section>
                <div className="sozlesme">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12">
                                <h2>Freelance İş Sözleşmesi</h2>
                                <h3>Gerekli Materyaller</h3>
                                <p>
                                    Müşteri, site için gerekli fotoğraf ve metin bazlı dokümanları kendisi tedarik etmekle yükümlüdür. Müşterinin gerekli dokümanları zamanında vermemesinden kaynaklanan gecikmelerden yazılımcı sorumlu tutulamaz.
                                </p>
                                <p>
                                    Görsel materyaller vektörel yada psd formatta ve eğer lisanslı ise lisansları satın alınmış bir halde yazılımcıya sunulmalıdır.
                                </p>
                                <p>
                                    Site için özel tasarım çizilmesi istenirse yada çekim için fotoğrafçı tutulacaksa yada metin bazlı içeriklerin yazılması için editör tutulacaksa bu kişiler müşteri yada yazılımcı tarafından bulunabilir. Fakat bu kişilere ödenecek olan hizmet bedeli yazılımcının siteden alacağı ücretle ilgisi yoktur, ödemeler ek olarak ilgili kişilere yapılacaktır.
                                </p>
                                <h3>Çoklu Dil Desteği</h3>
                                <p>
                                    Siteye çoklu dil desteği ekleyebilirim. Eklenecek olan her yabancı dil desteği, ücrete tabidir. Ayrıca İngilizce harici dillerde çeviriler yazılımcı tarafından yapılmaz, bu konuda müşterinin desteği gerekir.
                                </p>
                                <p>
                                    Eklenecek olan her farklı dil için ödenecek olan ücret <b>100 {Lira}</b>’dir.
                                </p>
                                <h3>Hizmet Bedeli</h3>
                                <p>
                                    Kodlamaya başlanmadan önce, müşteri tarafından seçilmiş olan <b>paketin ücreti</b>yle birlikte anlaşılan ücretin <b>30%</b>'u iş başlangıcında yazılımcının banka hesabına ödenmelidir.
                                </p>
                                <p>
                                    Sonrasında yazılımcı sitenin açılması için gerekli işlemleri gerçekleştirecektir. Bu süre ortalama olarak 1–3 gündür. Prosedürler tamamlandıktan sonra sitenin aktifleştiği ve kodlamanın başladığı müşteriye iletilecektir.
                                </p>
                                <p>
                                    Hizmet bedelinin kalan <b>70%</b>'i site geliştirmelerinin bitiminde yazılımcının banka hesabına ödenecektir. Geliştirme sürdükçe düzenli olarak müşteriyle irtibatta olunacak ve sitenin gelişiminden haberdar edilecektir.
                                </p>
                                <p>
                                    Güncel ücretler aşağıda belirtilmiştir. Bu ücretler yıllık olarak ödenecektir.
                                </p>
                                <blockquote>
                                    Domain ve hosting hizmetleri yıllık olarak kiralandığı için aşağıdaki ücretlerin her yıl ödenmesi gerekir. Bu sürenin takibi yazılımcı tarafından yapılacak olup, sürenin bitimine 2-3 ay kala tarafınıza bildirilecektir. Yenileme yapılmayan siteler kapatılacak olup, hizmet verilmeyecektir.
                                </blockquote>
                                <div className="flex">
                                    <div className="ck12 b8 b-2">
                                        <table className="renkli buyuk">
                                            <tbody>
                                                <tr>
                                                    <th>Paket Özellikleri</th>
                                                    <th>Ekonomik</th>
                                                    <th>İdeal</th>
                                                    <th>Limitsiz</th>
                                                </tr>
                                                <tr>
                                                    <td>Disk Alanı</td>
                                                    <td>500 MB</td>
                                                    <td>5 GB</td>
                                                    <td>Limitsiz</td>
                                                </tr>
                                                <tr>
                                                    <td>E-Mail Hesabı</td>
                                                    <td>1</td>
                                                    <td>5</td>
                                                    <td>Limitsiz</td>
                                                </tr>
                                                <tr>
                                                    <td>Dil Desteği</td>
                                                    <td>+100 {Lira}</td>
                                                    <td>+100 {Lira}</td>
                                                    <td>+100 {Lira}</td>
                                                </tr>
                                                <tr>
                                                    <td>Güvenlik</td>
                                                    <td>
                                                        {Yok}
                                                    </td>
                                                    <td>
                                                        {Var}
                                                    </td>
                                                    <td>
                                                        {Var}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b>Yıllık Ücret</b></td>
                                                    <td><b>200</b> {Lira}</td>
                                                    <td><b>350</b> {Lira}</td>
                                                    <td><b>500</b> {Lira}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p>
                                    Müşteri yapım aşamasında üzerinde çalışılan sitede köklü bir değişiklik talebinde bulunduğunda, sözleşme tutarının <b>%50</b>’si kadar fark ödeyeceğini kabul eder.
                                </p>
                                <blockquote>
                                    Hizmet bedeli olarak belirlenen ücrete domain, hosting, (varsa) çoklu dil desteği dahil olmak üzere tüm ücretler dahildir. Paket fiyatı her sene ödenmesi gereken zorunlu ücrettir. Sonraki yıllarda istenecek olan ek geliştirmeler ek hizmete girdiğinden tekrardan ücretlendirilecektir.
                                </blockquote>
                                <p>
                                    Ödemelerin yapılmaması durumunda, yazılımcı taahhüt ettiği hizmeti ertelemek, durdurmak veya sözleşmeyi feshetmek hakkına sahiptir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
