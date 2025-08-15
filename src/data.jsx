export const SHOP = {
  name: 'Cửa hàng ABC',
  hotline: '0909 123 456',
  zalo: 'https://zalo.me/0909123456',
  email: 'support@abcstore.vn',
  address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
  openHours: '8:00 - 21:00 (T2 - CN)'
}

export const PRODUCTS = [
  // Điện thoại
  {
    id: 1,
    name: 'Giỏ Cây Treo Tường Sử Dụng MIẾNG DÁN',
    price: 25000,
    originalPrice: 50000,
    category: 'Nhà cửa & Đời sống',
    image: 'https://i.postimg.cc/xTLdNjCW/z6907097013474-79a1efa79a3f0dcf79c633fa6532a639.jpg',
    images: [
      'https://i.postimg.cc/xTLdNjCW/z6907097013474-79a1efa79a3f0dcf79c633fa6532a639.jpg',
      'https://images.unsplash.com/photo-1485955900006-10f4d9d6b2b0?q=80&w=300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=300&auto=format&fit=crop'
    ],
    description: 'Giỏ cây treo tường cao cấp, chất liệu sắt sơn tĩnh điện bền bỉ. Sản phẩm bao gồm giỏ sắt và miếng dán 3M chắc chắn. Kích thước: Dài 20cm, cao 20cm, phần để cây 10cm. Phù hợp trang trí nhà cửa, văn phòng.'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    price: 19990000,
    originalPrice: 24990000,
    category: 'Điện thoại',
    image: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Xiaomi Redmi 12',
    price: 4990000,
    originalPrice: 6990000,
    category: 'Điện thoại',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'OPPO Reno10',
    price: 10990000,
    originalPrice: 13990000,
    category: 'Điện thoại',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae6e8b9a1?q=80&w=600&auto=format&fit=crop'
  },
  // Laptop
  {
    id: 5,
    name: 'MacBook Air M2 13"',
    price: 26990000,
    originalPrice: 32990000,
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop'
    ],
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    description: 'Mỏng nhẹ, pin bền, chip Apple M2 hiệu năng cao.'
  },
  {
    id: 6,
    name: 'ASUS TUF Gaming F15',
    price: 18990000,
    originalPrice: 22990000,
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    price: 32990000,
    originalPrice: 39990000,
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 39990000,
    originalPrice: 47990000,
    category: 'Laptop',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop'
  },
  // Phụ kiện
  {
    id: 9,
    name: 'Tai nghe Bluetooth',
    price: 790000,
    originalPrice: 1190000,
    category: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518441936079-1b59f1b1c6b6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Âm thanh sống động, kết nối ổn định, thời lượng pin dài.'
  },
  {
    id: 10,
    name: 'Sạc nhanh 65W',
    price: 490000,
    originalPrice: 790000,
    category: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 11,
    name: 'Chuột không dây',
    price: 350000,
    originalPrice: 590000,
    category: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1585079542156-2755d9c8affd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 12,
    name: 'Bàn phím cơ',
    price: 1590000,
    originalPrice: 2190000,
    category: 'Phụ kiện',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop'
  }
]

export const CATEGORIES = ['Tất cả', ...Array.from(new Set(PRODUCTS.map(p => p.category)))]

export function currencyVND(n) {
  return n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
}
