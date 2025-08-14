import { useState } from 'react'
import './App.css'

const SHOP = {
  name: 'Cửa hàng ABC',
  hotline: '0909 123 456',
  zalo: 'https://zalo.me/0909123456',
  email: 'support@abcstore.vn',
  address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
  openHours: '8:00 - 21:00 (T2 - CN)'
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Sản phẩm A',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1526178618718-537bf555f0b0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sản phẩm B',
    price: 230000,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sản phẩm C',
    price: 99000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Sản phẩm D',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=600&auto=format&fit=crop'
  }
]

function currencyVND(n) {
  return n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [customer, setCustomer] = useState({ name: '', phone: '', email: '', address: '' })
  const [step, setStep] = useState('products')

  const subtotal = selectedProduct ? selectedProduct.price * quantity : 0

  function openForm(product) {
    setSelectedProduct(product)
    setQuantity(1)
    setCustomer({ name: '', phone: '', email: '', address: '' })
    setStep('form')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStep('invoice')
  }

  function reset() {
    setSelectedProduct(null)
    setQuantity(1)
    setCustomer({ name: '', phone: '', email: '', address: '' })
    setStep('products')
  }

  return (
    <>
      <header className="site-header">
        <div className="nav">
          <div className="brand">{SHOP.name}</div>
          <nav className="nav-links">
            <a href="#home">Trang chủ</a>
            <a href="#products">Sản phẩm</a>
            <a href="#features">Ưu đãi</a>
            <a href="#contact">Liên hệ</a>
          </nav>
        </div>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Ưu đãi sốc hôm nay</h1>
            <p>Giá tốt, hàng chính hãng, giao nhanh trong 2h tại nội thành.</p>
            <div className="hero-actions">
              <a href="#products" className="btn primary">Mua ngay</a>
              <a href={SHOP.zalo} target="_blank" rel="noreferrer" className="btn">Tư vấn qua Zalo</a>
            </div>
            <div className="badges">
              <div className="badge">🚚 Freeship nội thành</div>
              <div className="badge">↩️ Đổi trả 7 ngày</div>
              <div className="badge">🛡️ Bảo hành 12 tháng</div>
              <div className="badge">💳 COD toàn quốc</div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </section>
      </header>

      <main>
        <section id="products" className="section">
          <h2>Sản phẩm nổi bật</h2>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="product-card" onClick={() => openForm(p)}>
                <div className="product-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <div className="product-name">{p.name}</div>
                  <div className="product-meta">
                    <span className="product-price">{currencyVND(p.price)}</span>
                    <button
                      className="buy-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        openForm(p)
                      }}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="section">
          <h2>Tại sao chọn {SHOP.name}?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="icon">🏷️</div>
              <div>
                <h3>Giá tốt mỗi ngày</h3>
                <p>Ưu đãi trực tiếp, không phí ẩn, minh bạch cho mọi đơn hàng.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">⚡</div>
              <div>
                <h3>Giao nhanh 2h</h3>
                <p>Áp dụng nội thành. Toàn quốc từ 1-3 ngày làm việc.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">🛡️</div>
              <div>
                <h3>Hàng chính hãng</h3>
                <p>Đầy đủ hóa đơn, tem bảo hành, đổi trả trong 7 ngày.</p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">🤝</div>
              <div>
                <h3>Hỗ trợ tận tâm</h3>
                <p>Hotline/Zalo {SHOP.hotline} từ {SHOP.openHours}.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Khách hàng nói gì?</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>“Đặt hàng buổi sáng, chiều đã có hàng. Đóng gói chắc chắn, sẽ ủng hộ tiếp.”</p>
              <span>— Minh Khoa</span>
            </div>
            <div className="testimonial">
              <p>“Giá hợp lý, tư vấn rõ ràng. Có xuất hóa đơn nhanh chóng.”</p>
              <span>— Thu Hà</span>
            </div>
            <div className="testimonial">
              <p>“Bảo hành chính hãng, đội ngũ hỗ trợ rất nhiệt tình.”</p>
              <span>— Quốc Huy</span>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <h2>Câu hỏi thường gặp</h2>
          <details>
            <summary>Phí vận chuyển tính như thế nào?</summary>
            <p>Freeship nội thành cho đơn từ 500K. Tỉnh khác từ 25K tùy khu vực.</p>
          </details>
          <details>
            <summary>Chính sách đổi trả?</summary>
            <p>Đổi trả trong 7 ngày nếu sản phẩm lỗi do nhà sản xuất, giữ nguyên tem và hộp.</p>
          </details>
          <details>
            <summary>Thanh toán ra sao?</summary>
            <p>Chấp nhận COD, chuyển khoản ngân hàng và thẻ nội địa/ quốc tế.</p>
          </details>
        </section>

        <section id="contact" className="section contact">
          <h2>Thông tin liên hệ</h2>
          <div className="contact-grid">
            <div>
              <p><strong>Cửa hàng:</strong> {SHOP.name}</p>
              <p><strong>Hotline:</strong> <a href={`tel:${SHOP.hotline}`}>{SHOP.hotline}</a></p>
              <p><strong>Zalo:</strong> <a href={SHOP.zalo} target="_blank" rel="noreferrer">Chat ngay</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a></p>
              <p><strong>Địa chỉ:</strong> {SHOP.address}</p>
              <p><strong>Giờ mở cửa:</strong> {SHOP.openHours}</p>
            </div>
            <div className="contact-cta">
              <p>Liên hệ để được tư vấn nhanh:</p>
              <div className="contact-actions">
                <a className="btn primary" href={`tel:${SHOP.hotline}`}>Gọi ngay</a>
                <a className="btn" href={SHOP.zalo} target="_blank" rel="noreferrer">Nhắn Zalo</a>
                <a className="btn" href="#products">Xem sản phẩm</a>
              </div>
            </div>
          </div>
        </section>

        {step !== 'products' && (
          <div className="modal-overlay" onClick={reset}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={reset}>
                ×
              </button>

              {step === 'form' && selectedProduct && (
                <>
                  <h3>Thông tin khách hàng</h3>
                  <div className="summary">
                    <span>{selectedProduct.name}</span>
                    <span>{currencyVND(selectedProduct.price)}</span>
                  </div>
                  <form onSubmit={handleSubmit} className="customer-form">
                    <label>
                      Họ và tên
                      <input
                        required
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      />
                    </label>
                    <label>
                      Số điện thoại
                      <input
                        required
                        type="tel"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      />
                    </label>
                    <label>
                      Email
                      <input
                        type="email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      />
                    </label>
                    <label>
                      Địa chỉ
                      <input
                        required
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      />
                    </label>
                    <label>
                      Số lượng
                      <input
                        required
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                      />
                    </label>

                    <div className="summary">
                      <span>Tạm tính</span>
                      <span>{currencyVND(subtotal)}</span>
                    </div>

                    <div className="actions">
                      <button type="button" onClick={reset} className="secondary">
                        Hủy
                      </button>
                      <button type="submit">Xuất hóa đơn</button>
                    </div>
                  </form>
                </>
              )}

              {step === 'invoice' && selectedProduct && (
                <div className="invoice">
                  <div className="invoice-actions no-print">
                    <button className="secondary" onClick={() => setStep('form')}>
                      Quay lại
                    </button>
                    <button onClick={() => window.print()}>In hóa đơn</button>
                  </div>

                  <div className="invoice-paper">
                    <h2>HÓA ĐƠN BÁN HÀNG</h2>
                    <div className="invoice-row">
                      <div>
                        <div>
                          <strong>Khách hàng:</strong> {customer.name}
                        </div>
                        <div>
                          <strong>Điện thoại:</strong> {customer.phone}
                        </div>
                        <div>
                          <strong>Email:</strong> {customer.email || '-'}
                        </div>
                        <div>
                          <strong>Địa chỉ:</strong> {customer.address}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div>
                          <strong>Cửa hàng:</strong> {SHOP.name}
                        </div>
                        <div>
                          <strong>Ngày:</strong> {new Date().toLocaleDateString('vi-VN')}
                        </div>
                        <div>
                          <strong>Mã đơn:</strong> {Date.now()}
                        </div>
                      </div>
                    </div>

                    <table className="invoice-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Sản phẩm</th>
                          <th>Đơn giá</th>
                          <th>Số lượng</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>{selectedProduct.name}</td>
                          <td>{currencyVND(selectedProduct.price)}</td>
                          <td>{quantity}</td>
                          <td>{currencyVND(subtotal)}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'right' }}>
                            Tổng cộng
                          </td>
                          <td>{currencyVND(subtotal)}</td>
                        </tr>
                      </tfoot>
                    </table>
                    <p style={{ marginTop: 12, fontSize: 12 }}>
                      Thanh toán khi nhận hàng hoặc chuyển khoản. Mọi thắc mắc vui lòng liên hệ {SHOP.hotline}.
                    </p>
                    <p className="thanks">Cảm ơn bạn đã mua hàng!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="#faq">Chính sách đổi trả</a>
          <a href="#faq">Vận chuyển</a>
          <a href="#faq">Bảo hành</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <small>© {new Date().getFullYear()} {SHOP.name}. All rights reserved.</small>
      </footer>

      <a className="floating-call" href={`tel:${SHOP.hotline}`}>📞 Gọi {SHOP.hotline}</a>
    </>
  )
}

export default App
