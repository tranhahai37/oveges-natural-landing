import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Leaf,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  ShoppingBag,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const zaloOrder =
  "https://zalo.me/0786692639?text=M%C3%88%20-%20T%C3%B4i%20mu%E1%BB%91n%20%C4%91%E1%BA%B7t%20B%E1%BB%99t%20M%C3%A8%20%C4%90en%20O%27VEGES";
const zaloWholesale =
  "https://zalo.me/0786692639?text=M%C3%88%20-%20T%C3%B4i%20mu%E1%BB%91n%20h%E1%BB%8Fi%20gi%C3%A1%20s%E1%BB%89%20B%E1%BB%99t%20M%C3%A8%20%C4%90en%20O%27VEGES";

const navItems = [
  ["Câu chuyện", "#story"],
  ["Cách dùng", "#ways"],
  ["Mua hàng", "#order"],
  ["Hỏi đáp", "#faq"],
];

const faqs = [
  [
    "Bột mè đen O'VEGES gồm những gì?",
    "Công thức gồm 80% mè đen và 20% đậu đen xanh lòng. Tỷ lệ được giữ nhất quán giữa các lô hàng để vị quen thuộc hơn mỗi lần pha.",
  ],
  [
    "Một gói pha như thế nào?",
    "Bạn có thể pha loãng với nước nóng khoảng 70°C để uống, giảm lượng nước để làm chén chè mè đen đặc, hoặc thêm sữa đặc hay đường thốt nốt theo khẩu vị.",
  ],
  [
    "Giá tham khảo hiện tại là bao nhiêu?",
    "Giá tham khảo trên bao bì ngày 10/09/2026 là 90.000đ/gói. Vui lòng nhắn Zalo để O'VEGES xác nhận giá hiện tại trước khi mua.",
  ],
  [
    "Có nhận đơn cho quán và đại lý không?",
    "Có. O'VEGES nhận trao đổi đơn số lượng lớn cho quán cà phê, tiệm chè, quán nước và đại lý. Nhắn nhu cầu để được tư vấn cách đóng gói, số lượng và lịch giao.",
  ],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand-mark ${light ? "brand-mark-light" : ""}`} aria-label="O'VEGES về đầu trang">
      <img src="/manus-storage/logo-transparent_42a6f20a.png" alt="O'VEGES" />
      <span>SỈ</span>
    </a>
  );
}

function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <div className="container announcement-inner">
          <span><Sparkles size={14} /> Mẻ mới đóng gói tại Phan Rang</span>
          <span className="announcement-divider" />
          <span>Giao khu vực Phan Rang – Tháp Chàm & vùng lân cận</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href={zaloOrder} className="nav-cta" onClick={() => setMenuOpen(false)}><MessageCircle size={16} /> Nhắn Zalo</a>
          </nav>
          <button className="menu-button" aria-label={menuOpen ? "Đóng menu" : "Mở menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grain" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <SectionEyebrow light>Sản phẩm chủ lực O'VEGES</SectionEyebrow>
              <h1>Đậm vị mè đen.<br /><em>Pha theo cách của bạn.</em></h1>
              <p className="hero-lead">Một công thức gọn gàng cho những buổi sáng cần chút ấm áp, cho chén chè cần vị bùi, và cho quán muốn thêm một món dễ bán vào menu.</p>
              <div className="hero-proof-list">
                <span><Check size={15} /> 80% mè đen</span>
                <span><Check size={15} /> 20% đậu đen xanh lòng</span>
                <span><Check size={15} /> Pha nóng khoảng 70°C</span>
              </div>
              <div className="hero-actions">
                <a className="button button-lime" href={zaloOrder}><MessageCircle size={18} /> Đặt mua qua Zalo <ArrowRight size={17} /></a>
                <a className="text-link text-link-light" href="#story">Xem câu chuyện <ArrowDown size={16} /></a>
              </div>
              <div className="hero-price-note"><span>Giá tham khảo</span><strong>90.000đ<span>/gói</span></strong><small>Trên bao bì ngày 10/09/2026</small></div>
            </div>
            <div className="hero-visual-wrap">
              <div className="hero-visual-frame">
                <img src="/manus-storage/hero_f6ddd4f4.jpg" alt="Bột mè đen O'VEGES bên cạnh mè đen nguyên hạt và lá xanh" className="hero-visual" />
                <div className="hero-caption"><span className="caption-dot" /> Hàng thật — đóng gói tại O'VEGES</div>
              </div>
              <div className="floating-note"><Leaf size={18} /><span>Thơm bùi<br /><b>tự nhiên</b></span></div>
            </div>
          </div>
          <div className="hero-bottom-label"><span>01</span><span className="line" /><span>Nguyên liệu rõ ràng</span></div>
        </section>

        <section className="ticker-section" aria-label="Thông tin sản phẩm">
          <div className="ticker-track">
            <span>MÈ ĐEN THƠM BÙI</span><i>✳</i><span>80 / 20</span><i>✳</i><span>PHA THEO CÁCH CỦA BẠN</span><i>✳</i><span>O'VEGES</span><i>✳</i><span>MÈ ĐEN THƠM BÙI</span><i>✳</i>
          </div>
        </section>

        <section className="section section-story" id="story">
          <div className="container story-grid">
            <div className="story-visual-column">
              <div className="section-number">02 <span>/ nguyên liệu</span></div>
              <div className="story-image-wrap"><img src="/manus-storage/powder_8936aaea.jpg" alt="Muỗng gỗ xúc bột mè đen mịn trên nền vải tự nhiên" /></div>
              <div className="image-side-note">Từ hạt mè đen<br /><strong>đến vị quen</strong></div>
            </div>
            <div className="story-copy">
              <SectionEyebrow>Điều làm nên vị</SectionEyebrow>
              <h2>Không cần nhiều thứ.<br /><em>Chỉ cần đúng tỷ lệ.</em></h2>
              <p className="lead-paragraph">Mọi câu chuyện của O'VEGES bắt đầu từ một chiếc nhãn nhỏ trên túi: 80% mè đen, 20% đậu đen xanh lòng.</p>
              <p>Mè đen cho nền vị thơm, bùi và màu đen đặc trưng. Đậu đen xanh lòng được phối theo đúng tỷ lệ ấy trong mọi lô hàng, để gói bột bạn mua tháng này vẫn mang về vị bạn đã quen tháng trước.</p>
              <div className="ingredient-stats">
                <div><strong>80<sup>%</sup></strong><span>mè đen</span></div>
                <div><strong>20<sup>%</sup></strong><span>đậu đen xanh lòng</span></div>
                <div><strong>70<sup>°C</sup></strong><span>nhiệt độ pha gợi ý</span></div>
              </div>
              <blockquote>“Khách hàng không cần nhớ công thức. Họ chỉ cần nhớ vị.”</blockquote>
            </div>
          </div>
        </section>

        <section className="section ways-section" id="ways">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <SectionEyebrow>03 / cách dùng</SectionEyebrow>
                <h2>Một gói bột,<br /><em>ba cách kể.</em></h2>
              </div>
              <p className="heading-aside">Đặc như chè, loãng như thức uống, hoặc thêm một chút ngọt béo — O'VEGES để bạn bắt đầu theo cách của riêng mình.</p>
            </div>
            <div className="ways-grid">
              <article className="way-card way-card-featured">
                <div className="way-image"><img src="/manus-storage/serve_56a30221.jpg" alt="Chén chè mè đen đặc trong bát gốm xanh" /></div>
                <div className="way-content"><span className="way-index">01</span><h3>Đặc như chè</h3><p>Giảm bớt lượng nước, khuấy sánh lại và thưởng thức bằng muỗng.</p><a href={zaloOrder} className="small-link">Thử ngay <ArrowRight size={15} /></a></div>
              </article>
              <article className="way-card">
                <div className="way-image"><img src="/manus-storage/cafe_4c3be1aa.jpg" alt="Ly thức uống mè đen trên bàn gỗ đón nắng" /></div>
                <div className="way-content"><span className="way-index">02</span><h3>Ấm như thức uống</h3><p>Pha loãng với nước nóng khoảng 70°C, khuấy đều và uống ngay.</p><a href={zaloOrder} className="small-link">Pha một ly <ArrowRight size={15} /></a></div>
              </article>
              <article className="way-card way-card-texture">
                <div className="texture-icon"><Sparkles size={28} /></div><span className="way-index">03</span><h3>Theo cách riêng</h3><p>Thêm sữa đặc, đường thốt nốt hoặc biến tấu thành món mới trong menu.</p><a href={zaloWholesale} className="small-link">Hỏi giá sỉ <ArrowRight size={15} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="split-statement">
          <div className="statement-image"><img src="/manus-storage/serve_56a30221.jpg" alt="Bát mè đen thành phẩm với hạt mè rắc trên mặt" /></div>
          <div className="statement-copy"><SectionEyebrow light>Một nguyên liệu, nhiều dịp</SectionEyebrow><h2>Để vị bùi<br /><em>ở lại lâu hơn.</em></h2><p>Cho một buổi sáng chậm rãi. Cho một chén chè vừa đủ ấm. Cho một quán nhỏ đang tìm thêm món đặc trưng.</p><a href={zaloOrder} className="button button-outline-light">Nhắn “MÈ” để đặt hàng <ArrowRight size={17} /></a></div>
        </section>

        <section className="section wholesale-section" id="order">
          <div className="container wholesale-grid">
            <div className="wholesale-copy"><SectionEyebrow>04 / hợp tác sỉ</SectionEyebrow><h2>Câu chuyện tiếp theo<br /><em>có thể là của quán bạn.</em></h2><p className="lead-paragraph">Từ một gói bột pha tại nhà, O'VEGES trở thành nguồn hàng được vài quán quanh Phan Rang – Tháp Chàm hỏi mua nhiều hơn.</p><p>Nếu bạn đang tìm một nguyên liệu mới cho thực đơn hoặc một nguồn mè đen ổn định, cuộc hợp tác thường bắt đầu bằng một tin nhắn ngắn.</p><div className="steps-list"><div><b>01</b><span><strong>Một tin nhắn</strong> — Nhắn “MÈ” và cho biết bạn đang kinh doanh gì.</span></div><div><b>02</b><span><strong>Một cuộc trao đổi</strong> — Thống nhất số lượng, đóng gói và mức giá.</span></div><div><b>03</b><span><strong>Một đơn hàng đầu tiên</strong> — Thử trước khi đặt định kỳ.</span></div></div><div className="wholesale-actions"><a href={zaloWholesale} className="button button-forest"><MessageCircle size={17} /> Hỏi giá sỉ qua Zalo</a><a href="tel:0786692639" className="button button-ghost"><Phone size={17} /> 0786 692 639</a></div></div>
            <div className="wholesale-visual"><div className="visual-label"><Store size={17} /><span>Dành cho quán<br /><strong>& đại lý</strong></span></div><img src="/manus-storage/cafe_4c3be1aa.jpg" alt="Thức uống mè đen trong không gian mộc tự nhiên, phù hợp cho quán" /><div className="visual-bottom-note">Phan Rang – Tháp Chàm<br /><strong>và vùng lân cận</strong></div></div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container faq-grid"><div className="faq-intro"><SectionEyebrow>05 / trước khi nhắn tin</SectionEyebrow><h2>Vài điều bạn<br /><em>có thể đang hỏi.</em></h2><p>Nếu chưa thấy câu trả lời, cứ nhắn nhu cầu. O'VEGES sẽ phản hồi trong ngày.</p><a href={zaloOrder} className="text-link">Nhắn để được tư vấn <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{question}</span>{isOpen ? <Minus size={19} /> : <ChevronDown size={19} />}</button>{isOpen && <p>{answer}</p>}</div>; })}</div></div>
        </section>

        <section className="final-cta-section">
          <div className="final-cta-image"><img src="/manus-storage/hero_f6ddd4f4.jpg" alt="Bột mè đen và hạt mè đen trong ánh nắng tự nhiên" /></div>
          <div className="container final-cta-inner"><Logo light /><SectionEyebrow light>Đặt vị bùi lên kệ bếp</SectionEyebrow><h2>Một gói hôm nay.<br /><em>Một vị quen ngày mai.</em></h2><p>Nhắn từ khóa “MÈ” hoặc gọi trực tiếp — O'VEGES phản hồi trong ngày.</p><div className="final-actions"><a href={zaloOrder} className="button button-lime"><MessageCircle size={18} /> Nhắn Zalo 0786 692 639</a><a href="tel:0786692639" className="button button-outline-light"><Phone size={17} /> Gọi ngay</a></div><address>Đường Tô Ngọc Vân, K1, Phan Rang – Tháp Chàm<br />Đối diện bãi giữ xe KarinOx.</address></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span>© O'VEGES — Đen thơm, pha theo cách của bạn.</span><span>0786 692 639</span></div></footer>
      <div className="mobile-sticky-cta"><a href="tel:0786692639"><Phone size={16} /> Gọi ngay</a><a href={zaloOrder}><MessageCircle size={16} /> Nhắn Zalo</a></div>
    </div>
  );
}

export default Home;

// Keep imported icons in the bundle tree-shaken safely when the visual language evolves.
void ShoppingBag;
void Clock3;
void ArrowDown;
