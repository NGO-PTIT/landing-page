import { useState } from 'react'
import { createOrder } from './api/orders'
import { SHOP, PRODUCTS, CATEGORIES, currencyVND } from './data.jsx'
import './App.css'





function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [customer, setCustomer] = useState({ name: '', phone: '', email: '', address: '' })
  const [step, setStep] = useState('products')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [category, setCategory] = useState('Tất cả')
  const [page, setPage] = useState(1)
  const pageSize = 8
  const [mediaIndex, setMediaIndex] = useState(0)

  const subtotal = selectedProduct ? selectedProduct.price * quantity : 0
  const productsToShow = PRODUCTS.filter(p => category === 'Tất cả' || p.category === category)
  const totalPages = Math.max(1, Math.ceil(productsToShow.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pagedProducts = productsToShow.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  function openForm(product) {
    setSelectedProduct(product)
    setQuantity(1)
    setCustomer({ name: '', phone: '', email: '', address: '' })
    setStep('form')
  }

  function openDetail(product) {
    setSelectedProduct(product)
    setMediaIndex(0)
    setStep('detail')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)
    try {
      const order = {
        items: [
          {
            productId: selectedProduct.id,
            productName: selectedProduct.name,
            unitPrice: selectedProduct.price,
            quantity,
          },
        ],
        total: subtotal,
        contact: customer,
      }
      const ref = await createOrder(order)
      setOrderId(ref.id)
      setStep('invoice')
    } catch (err) {
      console.error('Create order error:', err)
      const message = err && err.message ? err.message : 'Lưu đơn hàng thất bại. Vui lòng thử lại.'
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  function reset() {
    setSelectedProduct(null)
    setQuantity(1)
    setCustomer({ name: '', phone: '', email: '', address: '' })
    setStep('products')
    setOrderId('')
    setSubmitError('')
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
          <div className="category-tabs">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`tab ${category === c ? 'active' : ''}`}
                onClick={() => { setCategory(c); setPage(1) }}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {pagedProducts.map((p) => (
              <div key={p.id} className="product-card" onClick={() => openDetail(p)}>
                <div className="product-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <div className="product-name">{p.name}</div>
                  <div className="product-meta">
                    <div className="price-stack">
                      <span className="product-price">{currencyVND(p.price)}</span>
                      {p.originalPrice && p.originalPrice > p.price && (
                        <span className="product-original">{currencyVND(p.originalPrice)}</span>
                      )}
                    </div>
                    {p.originalPrice && p.originalPrice > p.price && (
                      <span className="discount-badge">-{Math.round((1 - p.price / p.originalPrice) * 100)}%</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button
              type="button"
              className="page-btn"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Trang trước"
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`page-btn ${currentPage === n ? 'active' : ''}`}
                onClick={() => setPage(n)}
                aria-current={currentPage === n ? 'page' : undefined}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="page-btn"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Trang sau"
            >
              Sau
            </button>
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
          <div
            className="modal-overlay"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) reset()
            }}
          >
            <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
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
                    {submitError && (
                      <div style={{ color: 'red', fontSize: 12 }}>{submitError}</div>
                    )}

                    <div className="actions">
                      <button type="button" onClick={reset} className="secondary">
                        Hủy
                      </button>
                      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Đang lưu...' : 'Xuất hóa đơn'}</button>
                    </div>
                  </form>
                </>
              )}

              {step === 'detail' && selectedProduct && (
                <div className="product-detail">
                  {(() => {
                    const images = Array.isArray(selectedProduct.images) && selectedProduct.images.length > 0
                      ? selectedProduct.images
                      : [selectedProduct.image]
                    const media = (selectedProduct.video ? [{ type: 'video', src: selectedProduct.video }] : [])
                      .concat(images.map(src => ({ type: 'image', src })))
                    const active = media[Math.min(mediaIndex, media.length - 1)]
                    return (
                      <>
                        <div className="detail-media">
                          <div className="main-media">
                            {active?.type === 'video' ? (
                              <video controls playsInline src={active.src} />
                            ) : (
                              <img src={active?.src} alt={selectedProduct.name} loading="lazy" />
                            )}
                          </div>
                          <div className="thumbs">
                            {media.map((m, idx) => (
                              <button
                                key={idx}
                                type="button"
                                className={`thumb ${idx === Math.min(mediaIndex, media.length - 1) ? 'active' : ''}`}
                                onClick={() => setMediaIndex(idx)}
                                aria-pressed={idx === Math.min(mediaIndex, media.length - 1)}
                              >
                                {m.type === 'video' ? (
                                  <span className="thumb-video">▶</span>
                                ) : (
                                  <img src={m.src} alt={`thumb-${idx}`} loading="lazy" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="detail-info">
                          <h3 className="detail-title">{selectedProduct.name}</h3>
                          <div className="detail-price">{currencyVND(selectedProduct.price)}</div>
                          {selectedProduct.category && (
                            <div className="detail-cat">{selectedProduct.category}</div>
                          )}
                          <p className="detail-desc">{selectedProduct.description || 'Sản phẩm chính hãng, bảo hành 12 tháng, đổi trả trong 7 ngày.'}</p>
                          <div className="detail-actions">
                            <button className="btn primary" onClick={() => setStep('form')}>Mua ngay</button>
                            <button className="btn" onClick={() => setStep('products')}>Đóng</button>
                          </div>
                        </div>
                      </>
                    )
                  })()}
                </div>
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
                          <strong>Mã đơn:</strong> {orderId || Date.now()}
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
