import React from 'react';
import { X, CreditCard, Copy, ShieldCheck, MessageCircle } from 'lucide-react';

const PaymentModal = ({ plan, onClose }) => {
  // --- DATA CONFIG ---
  const paymentInfo = {
    bank: 'SeaBank',
    accountNumber: '901912153730',
    accountName: 'Wildan',
    adminWA: '6285603768556'
  };

  // Fungsi Copy
  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentInfo.accountNumber);
    alert('Nomor rekening berhasil disalin!'); 
  };

  // Fungsi Konfirmasi WA
  const handleWhatsAppConfirm = () => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(plan?.price || 0);

    const message = `Halo Admin, saya sudah transfer ${formattedPrice} untuk paket ${plan?.title || 'Premium'}. Mohon diproses.`;
    const whatsappUrl = `https://wa.me/${paymentInfo.adminWA}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!plan) return null;

  return (
    // OVERLAY GELAP
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      
      {/* KOTAK MODAL */}
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-10 duration-300" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Pembayaran</h2>
            <p className="text-sm text-slate-500">Paket: <span className="font-bold text-emerald-600">{plan.title}</span></p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* KARTU INFO BANK (YANG RUSAK KITA PERBAIKI DISINI) */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6">
          
          {/* Nama Bank */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
               <CreditCard className="w-5 h-5"/>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase">Bank Tujuan</p>
              <p className="font-bold text-slate-900 text-lg leading-none">{paymentInfo.bank}</p>
            </div>
          </div>

          {/* Kotak Nomor Rekening (Sudah Rapi) */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between mb-3 shadow-sm">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Nomor Rekening</p>
              <p className="font-mono text-xl font-bold text-slate-800 tracking-wide">
                {paymentInfo.accountNumber}
              </p>
            </div>
            <button 
              onClick={copyToClipboard}
              className="p-2 bg-slate-50 hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Copy className="w-5 h-5"/>
            </button>
          </div>

          {/* Atas Nama */}
          <div className="flex justify-between items-center px-1 mb-4">
            <p className="text-sm text-slate-500">Atas Nama</p>
            <p className="font-bold text-slate-900">{paymentInfo.accountName}</p>
          </div>
          
          {/* Peringatan */}
          <div className="flex gap-3 bg-amber-50 p-3 rounded-xl border border-amber-100 text-amber-800 text-xs leading-relaxed">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5"/>
            <p>Pastikan nama penerima <strong>{paymentInfo.accountName}</strong>. Jika beda, harap tanya Admin.</p>
          </div>
        </div>

        {/* FOOTER & TOMBOL (Sudah tidak mepet bawah) */}
        <div className="border-t border-dashed border-slate-200 py-4 mb-2">
          <div className="flex justify-between text-sm items-center mb-4">
            <span className="text-slate-500">Total Tagihan</span>
            <span className="font-bold text-slate-900 text-2xl">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(plan.price)}
            </span>
          </div>

          <button 
            onClick={handleWhatsAppConfirm}
            className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-slate-900/20"
          >
            <MessageCircle className="w-5 h-5"/> Konfirmasi via WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
