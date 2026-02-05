'use client'

// Mobile hamburger menu sidebar implementation
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ShoppingBag, ShoppingCart, Search, Menu, X, Coffee, Truck, Shield, Star, Instagram, Mail, Phone, MapPin, Check, Home as HomeIcon } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface Product {
  id: string
  name: string
  price: number
  description: string
  category: string
  stock: number
  rating: number
  imageUrl?: string | null
}

export default function Home() {
  const [cart, setCart] = useState<{[key: string]: number}>({})
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        if (data && data.length > 0) {
          setProducts(data)
        } else {
          // Use default products if API returns empty
          setProducts([
            {
              id: '1',
              name: 'Lopasupa Premium Arabica',
              price: 75000,
              description: 'Kopi Arabika premium dari dataran tinggi dengan aroma yang kuat dan rasa yang halus',
              category: 'Arabica',
              stock: 50,
              rating: 5,
              imageUrl: '/product-1.png'
            },
            {
              id: '2',
              name: 'Lopasupa Robusta Gold',
              price: 65000,
              description: 'Kopi Robusta pilihan dengan kandungan kafein tinggi dan rasa yang bold',
              category: 'Robusta',
              stock: 75,
              rating: 4,
              imageUrl: '/product-2.png'
            },
            {
              id: '3',
              name: 'Lopasupa Espresso Blend',
              price: 85000,
              description: 'Blend sempurna Arabika dan Robusta untuk espresso yang kaya rasa',
              category: 'Blend',
              stock: 40,
              rating: 5,
              imageUrl: '/product-3.png'
            },
            {
              id: '4',
              name: 'Lopasupa House Special',
              price: 95000,
              description: 'Racikan kopi spesial Lopasupa dengan resep rahasia yang unik',
              category: 'Special',
              stock: 30,
              rating: 5,
              imageUrl: '/product-4.png'
            },
            {
              id: '5',
              name: 'Lopasupa Decaf Delight',
              price: 80000,
              description: 'Kopi tanpa kafein dengan rasa tetap nikmat dan aroma yang memikat',
              category: 'Decaf',
              stock: 25,
              rating: 4,
              imageUrl: '/product-5.png'
            },
            {
              id: '6',
              name: 'Lopasupa Single Origin Toraja',
              price: 120000,
              description: 'Kopi Single Origin dari Toraja dengan karakteristik unik dan eksklusif',
              category: 'Single Origin',
              stock: 20,
              rating: 5,
              imageUrl: '/product-6.png'
            }
          ])
        }
      } else {
        // Use default products on error
        setProducts([
          {
            id: '1',
            name: 'Lopasupa Premium Arabica',
            price: 75000,
            description: 'Kopi Arabika premium dari dataran tinggi dengan aroma yang kuat dan rasa yang halus',
            category: 'Arabica',
            stock: 50,
            rating: 5,
            imageUrl: '/product-1.png'
          },
          {
            id: '2',
            name: 'Lopasupa Robusta Gold',
            price: 65000,
            description: 'Kopi Robusta pilihan dengan kandungan kafein tinggi dan rasa yang bold',
            category: 'Robusta',
            stock: 75,
            rating: 4,
            imageUrl: '/product-2.png'
          },
          {
            id: '3',
            name: 'Lopasupa Espresso Blend',
            price: 85000,
            description: 'Blend sempurna Arabika dan Robusta untuk espresso yang kaya rasa',
            category: 'Blend',
            stock: 40,
            rating: 5,
            imageUrl: '/product-3.png'
          },
          {
            id: '4',
            name: 'Lopasupa House Special',
            price: 95000,
            description: 'Racikan kopi spesial Lopasupa dengan resep rahasia yang unik',
            category: 'Special',
            stock: 30,
            rating: 5,
            imageUrl: '/product-4.png'
          },
          {
            id: '5',
            name: 'Lopasupa Decaf Delight',
            price: 80000,
            description: 'Kopi tanpa kafein dengan rasa tetap nikmat dan aroma yang memikat',
            category: 'Decaf',
            stock: 25,
            rating: 4,
            imageUrl: '/product-5.png'
          },
          {
            id: '6',
            name: 'Lopasupa Single Origin Toraja',
            price: 120000,
            description: 'Kopi Single Origin dari Toraja dengan karakteristik unik dan eksklusif',
            category: 'Single Origin',
            stock: 20,
            rating: 5,
            imageUrl: '/product-6.png'
          }
        ])
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // Use default products on error
      setProducts([
        {
          id: '1',
          name: 'Lopasupa Premium Arabica',
          price: 75000,
          description: 'Kopi Arabika premium dari dataran tinggi dengan aroma yang kuat dan rasa yang halus',
          category: 'Arabica',
          stock: 50,
          rating: 5,
          imageUrl: '/product-1.png'
        },
        {
          id: '2',
          name: 'Lopasupa Robusta Gold',
          price: 65000,
          description: 'Kopi Robusta pilihan dengan kandungan kafein tinggi dan rasa yang bold',
          category: 'Robusta',
          stock: 75,
          rating: 4,
          imageUrl: '/product-2.png'
        },
        {
          id: '3',
          name: 'Lopasupa Espresso Blend',
          price: 85000,
          description: 'Blend sempurna Arabika dan Robusta untuk espresso yang kaya rasa',
          category: 'Blend',
          stock: 40,
          rating: 5,
          imageUrl: '/product-1.png'
        },
        {
          id: '4',
          name: 'Lopasupa House Special',
          price: 95000,
          description: 'Racikan kopi spesial Lopasupa dengan resep rahasia yang unik',
          category: 'Special',
          stock: 30,
          rating: 5,
          imageUrl: '/product-2.png'
        },
        {
          id: '5',
          name: 'Lopasupa Decaf Delight',
          price: 80000,
          description: 'Kopi tanpa kafein dengan rasa tetap nikmat dan aroma yang memikat',
          category: 'Decaf',
          stock: 25,
          rating: 4,
          imageUrl: '/product-1.png'
        },
        {
          id: '6',
          name: 'Lopasupa Single Origin Toraja',
          price: 120000,
          description: 'Kopi Single Origin dari Toraja dengan karakteristik unik dan eksklusif',
          category: 'Single Origin',
          stock: 20,
          rating: 5,
          imageUrl: '/product-2.png'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const features = [
    {
      icon: Coffee,
      title: 'Kualitas Premium',
      description: 'Biji kopi pilihan terbaik dari petani lokal berkualitas'
    },
    {
      icon: Truck,
      title: 'Pengiriman Cepat',
      description: 'Pengiriman cepat ke seluruh Indonesia dengan packaging aman'
    },
    {
      icon: Shield,
      title: 'Jaminan Segar',
      description: 'Kopi yang dipanggang segar untuk rasa maksimal'
    }
  ]

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId)
      return total + (product?.price || 0) * quantity
    }, 0)
  }

  const getSelectedTotal = () => {
    return Array.from(selectedItems).reduce((total, productId) => {
      const product = products.find(p => p.id === productId)
      return total + (product?.price || 0) * (cart[productId] || 0)
    }, 0)
  }

  const getCartCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const toggleItemSelection = (productId: string) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  const selectAllItems = () => {
    setSelectedItems(new Set(Object.keys(cart)))
  }

  const deselectAllItems = () => {
    setSelectedItems(new Set())
  }

  const checkoutToWhatsApp = (selectedProductIds: string[]) => {
    let message = 'Halo Lopasupa, saya ingin memesan:\n\n'
    let total = 0
    
    selectedProductIds.forEach(productId => {
      const product = products.find(p => p.id === productId)
      if (product) {
        const quantity = cart[productId] || 0
        const subtotal = product.price * quantity
        total += subtotal
        message += `• ${product.name}\n  Qty: ${quantity}\n  Harga: Rp ${subtotal.toLocaleString('id-ID')}\n\n`
      }
    })
    
    message += `*Total: Rp ${total.toLocaleString('id-ID')}*\n\nMohon info pembayarannya. Terima kasih!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/62895402914874?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Reset cart and selection after checkout
    setCart({})
    setSelectedItems(new Set())
    setIsCartOpen(false)
  }

  const checkoutSelected = () => {
    if (selectedItems.size === 0) {
      alert('Silakan pilih item yang ingin di-checkout')
      return
    }
    checkoutToWhatsApp(Array.from(selectedItems))
  }

  const checkoutAll = () => {
    const allProductIds = Object.keys(cart)
    if (allProductIds.length === 0) {
      alert('Keranjang Anda kosong')
      return
    }
    checkoutToWhatsApp(allProductIds)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 w-full animate-fade-in-page">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-amber-900 to-amber-800 shadow-lg animate-slide-up">
        <div className="w-full max-w-screen-2xl mx-auto flex h-16 items-center px-4 md:px-8">
          {/* Logo - Kiri */}
          <div className="flex items-center gap-2 flex-shrink-0 animate-fade-in" style={{ animationDelay: '0s' }}>
            <img
              src="/lopasupa-logo.png"
              alt="LOPASUPA KOPI"
              className="h-14 w-14 object-contain rounded-full bg-white/10 p-1 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation - Tengah */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <a href="#home" className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Beranda
            </a>
            <a href="#products" className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Produk
            </a>
            <a href="#about" className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Tentang
            </a>
            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-110 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Kontak
            </a>
          </nav>

          {/* Cart & Menu - Kanan */}
          <div className="flex items-center gap-4 flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-green-500 text-white hover:bg-green-600">
                  {getCartCount()}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Modern Hamburger Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-amber-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-amber-700">
            <div className="flex items-center gap-2">
              <img
                src="/lopasupa-logo.png"
                alt="LOPASUPA KOPI"
                className="h-10 w-10 object-contain rounded-full bg-white/10 p-1"
              />
              <span className="text-white font-semibold text-lg">LOPASUPA KOPI</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col p-6 gap-2">
            <a
              href="#home"
              className="flex items-center gap-3 p-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HomeIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Beranda</span>
            </a>
            <a
              href="#products"
              className="flex items-center gap-3 p-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Produk</span>
            </a>
            <a
              href="#about"
              className="flex items-center gap-3 p-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Coffee className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Tentang</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 p-4 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Kontak</span>
            </a>
          </nav>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-700">
            <p className="text-xs text-amber-200/60 text-center">
              © 2024 LOPASUPA KOPI
            </p>
          </div>
        </div>
      </header>

      {/* Cart Drawer/Sidebar */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Drawer Panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b p-6 transition-all duration-300">
              <h2 className="text-lg font-semibold transition-all duration-300">Keranjang Belanja</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)} className="transition-transform duration-300 hover:scale-110">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {Object.keys(cart).length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-amber-700">
                  <ShoppingBag className="h-16 w-16 mb-4 transition-transform duration-300 hover:scale-110" />
                  <p>Keranjang Anda kosong</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Select All / Deselect All */}
                  <div className="flex items-center justify-between p-3 bg-amber-100 rounded-lg border border-amber-200">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={selectAllItems}
                      className="text-sm hover:bg-amber-200 text-amber-900"
                    >
                      Pilih Semua
                    </Button>
                    <span className="text-sm text-amber-700">
                      {selectedItems.size} / {Object.keys(cart).length} dipilih
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={deselectAllItems}
                      className="text-sm hover:bg-amber-200 text-amber-900"
                    >
                      Batal Pilih
                    </Button>
                  </div>

                  {/* Cart Items */}
                  {Object.entries(cart).map(([productId, quantity]) => {
                    const product = products.find(p => p.id === productId)
                    if (!product) return null
                    const isSelected = selectedItems.has(productId)
                    return (
                      <div 
                        key={productId} 
                        className={`flex gap-4 p-4 border rounded-lg transition-all duration-300 hover:shadow-md ${isSelected ? 'border-amber-500 bg-amber-50' : 'border-amber-200'}`}
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggleItemSelection(productId)}
                          className={`flex items-center justify-center w-6 h-6 rounded border-2 transition-all duration-300 hover:scale-110 ${
                            isSelected 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300 hover:border-green-500'
                          }`}
                        >
                          {isSelected && <Check className="h-4 w-4" />}
                        </button>

                        {/* Product Info */}
                        <div className="flex-1 transition-all duration-300 hover:scale-102">
                          <h3 className="font-medium text-amber-900 transition-all duration-300 hover:text-amber-700">{product.name}</h3>
                          <p className="text-sm text-amber-900">Rp {product.price.toLocaleString('id-ID')}</p>
                          <p className="text-xs text-amber-700 mt-1">Subtotal: Rp {(product.price * quantity).toLocaleString('id-ID')}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFromCart(product.id)}
                            className="transition-all duration-300 hover:scale-110 hover:shadow-md"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addToCart(product.id)}
                            className="transition-all duration-300 hover:scale-110 hover:shadow-md"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            {Object.keys(cart).length > 0 && (
              <div className="border-t p-6 space-y-4 transition-all duration-300">
                <div className="flex justify-between text-base text-amber-700 transition-all duration-300 hover:scale-102">
                  <span>Total Keranjang</span>
                  <span>Rp {getCartTotal().toLocaleString('id-ID')}</span>
                </div>
                {selectedItems.size > 0 && (
                  <div className="flex justify-between text-lg font-semibold text-amber-900 transition-all duration-300 hover:scale-102">
                    <span>Total Dipilih</span>
                    <span>Rp {getSelectedTotal().toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                    size="lg"
                    disabled={selectedItems.size === 0}
                    onClick={checkoutSelected}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Checkout Terpilih ({selectedItems.size})
                  </Button>
                  <Button 
                    className="w-full border-amber-700 text-amber-700 hover:bg-amber-50 transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                    variant="outline"
                    onClick={checkoutAll}
                  >
                    Checkout Semua ({Object.keys(cart).length})
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: 'url(/bg-lopasupa.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 animate-fade-in-page" />
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <img
              src="/lopasupa-logo.png"
              alt="LOPASUPA KOPI"
              className="h-32 w-32 mx-auto object-contain rounded-full bg-white/20 p-3 transition-all duration-300 hover:scale-110 hover:rotate-3 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up transition-all duration-300 hover:scale-105 hover:text-amber-100" style={{ animationDelay: '0.8s' }}>
              Nikmati Kualitas Kopi Terbaik
            </h1>
            <p className="text-lg md:text-xl text-gray-200 animate-slide-up transition-all duration-300 hover:scale-102" style={{ animationDelay: '1s' }}>
              Lopasupa Kopi hadir dengan cita rasa kopi premium yang akan memanjakan lidah Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Produk
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 border-amber-700 text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Tentang Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 md:py-24 bg-amber-200">
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 transition-all duration-300 hover:scale-105">
                Kenapa Lopasupa?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Kami berkomitmen menyajikan kopi berkualitas terbaik dengan cita rasa autentik
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index + 2}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-amber-200 shadow-md hover:scale-105 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-amber-200 rounded-full w-fit transition-all duration-300 hover:scale-110 hover:bg-amber-300">
                      <feature.icon className="h-8 w-8 text-amber-800" />
                    </div>
                    <CardTitle className="text-xl text-amber-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-amber-700">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-amber-200">
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 transition-all duration-300 hover:scale-105">
                Produk Kami
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Pilihan kopi premium untuk menemani setiap momen Anda
              </p>
            </ScrollReveal>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="flex flex-col border-amber-200 shadow-md">
                  <CardHeader>
                    <div className="aspect-square bg-amber-100 rounded-lg mb-2 animate-pulse" />
                    <div className="h-3 bg-amber-200 rounded w-3/4 animate-pulse" />
                    <div className="h-2 bg-amber-200 rounded w-1/2 animate-pulse mt-1" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="h-3 bg-amber-200 rounded w-full mb-2 animate-pulse" />
                    <div className="h-3 bg-amber-200 rounded w-5/6 mb-2 animate-pulse" />
                    <div className="h-4 bg-amber-200 rounded w-1/2 animate-pulse mt-2" />
                  </CardContent>
                  <CardFooter>
                    <div className="h-8 bg-amber-200 rounded w-full animate-pulse" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index + 2}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border-amber-200 shadow-md hover:scale-105 hover:-translate-y-1">
                <CardHeader className="p-0 pb-0">
                  <div className="px-1.5 pt-1.5">
                    <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg overflow-hidden">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <Coffee className="h-16 w-16 text-amber-800" />
                      </div>
                    )}
                    </div>
                  </div>
                  <div className="px-4 pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg font-semibold text-amber-900 transition-all duration-300 hover:scale-105">{product.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                      {renderStars(product.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 px-4 py-0 pb-2 pt-0 -mt-2">
                  <CardDescription className="text-sm mb-1 text-amber-700 transition-all duration-300 hover:text-amber-900">
                    {product.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mb-1 bg-amber-200 text-amber-800 hover:bg-amber-300 transition-all duration-300 hover:scale-105">
                    {product.category}
                  </Badge>
                  <div className="transition-all duration-300 hover:scale-105">
                    <p className="text-xl font-bold text-amber-900">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                    <p className="text-xs text-amber-700">
                      Stok: {product.stock} pack
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 px-4 py-0 pt-0">
                  <Button
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white border-0 shadow-md text-sm py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="mr-1 h-3 w-3" />
                    Tambah
                  </Button>
                </CardFooter>
              </Card>
              </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-amber-200">
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami untuk pertanyaan atau pemesanan
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mx-auto w-full max-w-screen-2xl">
            <ScrollReveal delay={2}>
              <Card className="text-center p-6 border-amber-200 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Phone className="h-12 w-12 mx-auto mb-4 text-amber-700 transition-transform duration-300 hover:scale-110" />
                  <CardTitle className="text-amber-900">Telepon / WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-amber-700">+62 895-4029-14874</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <Card className="text-center p-6 border-amber-200 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Mail className="h-12 w-12 mx-auto mb-4 text-amber-700 transition-transform duration-300 hover:scale-110" />
                  <CardTitle className="text-amber-900">Email</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href="mailto:josuaabimanyu62@gmail.com"
                    className="text-base text-amber-700 hover:text-amber-900 transition-colors no-underline hover:underline font-medium break-all leading-relaxed"
                  >
                    josuaabimanyu62@gmail.com
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <Card className="text-center p-6 border-amber-200 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-700 transition-transform duration-300 hover:scale-110" />
                  <CardTitle className="text-amber-900">Alamat</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-amber-700">Jl. Rancabentang Timur No. 118, Jawa Barat</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 py-12 mt-auto">
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <ScrollReveal>
              <div className="md:col-span-2">
                <img
                  src="/lopasupa-logo.png"
                  alt="LOPASUPA KOPI"
                  className="h-20 w-20 mb-4 object-contain rounded-full bg-white/20 p-2 transition-all duration-300 hover:scale-110 hover:rotate-3"
                />
                <p className="text-sm text-amber-100/80 max-w-md">
                  Lopasupa Kopi menyajikan kopi premium berkualitas tinggi dari biji kopi pilihan terbaik Indonesia.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-amber-100/80">
                  <li><a href="#home" className="hover:text-amber-50 transition-colors hover:translate-x-1 inline-block transition-all duration-300">Beranda</a></li>
                  <li><a href="#products" className="hover:text-amber-50 transition-colors hover:translate-x-1 inline-block transition-all duration-300">Produk</a></li>
                  <li><a href="#about" className="hover:text-amber-50 transition-colors hover:translate-x-1 inline-block transition-all duration-300">Tentang Kami</a></li>
                  <li><a href="#contact" className="hover:text-amber-50 transition-colors hover:translate-x-1 inline-block transition-all duration-300">Kontak</a></li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/lopasupa_kopi_premium" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-amber-100 transition-transform duration-300 hover:scale-110">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="mailto:josuaabimanyu62@gmail.com" className="hover:opacity-80 transition-opacity text-amber-100 transition-transform duration-300 hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="border-t border-amber-700 pt-8 text-center text-sm text-amber-100/60">
            <p>&copy; 2024 LOPASUPA KOPI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
