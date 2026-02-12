
import React, { useState, useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { 
  Camera, 
  Maximize2, 
  Eye, 
  TrendingUp, 
  Plus, 
  X, 
  Upload, 
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GalleryImage } from '../types';

export default function GalleryView() {
  const [images, setImages] = useState<GalleryImage[]>(GALLERY_IMAGES as GalleryImage[]);
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  
  // Upload Form State
  const [uploading, setUploading] = useState(false);
  const [newCaption, setNewCaption] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryImage['category']>('trail');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFilteredImages = () => {
    if (filter === 'all') return images;
    if (filter === 'popular') {
      return [...images].sort((a, b) => b.views - a.views).slice(0, 4);
    }
    return images.filter(img => img.category === filter);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl || !newCaption) return;

    setUploading(true);

    // Simulate network delay
    setTimeout(() => {
      const newImg: GalleryImage = {
        id: Date.now(),
        url: previewUrl,
        caption: newCaption,
        category: newCategory,
        views: 0
      };

      setImages([newImg, ...images]);
      setUploading(false);
      setNewCaption('');
      setPreviewUrl(null);
      setIsAdminMode(false);
    }, 1500);
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">The Trail Log</h1>
              <button 
                onClick={() => setIsAdminMode(!isAdminMode)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  isAdminMode 
                  ? 'bg-stone-900 text-white border-stone-900' 
                  : 'bg-white text-stone-500 border-stone-200 hover:border-emerald-200 hover:text-emerald-700'
                }`}
              >
                {isAdminMode ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                Admin: {isAdminMode ? 'Cancel' : 'Add Photo'}
              </button>
            </div>
            <p className="text-xl text-stone-600">Scenes from our latest backcountry expeditions.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-stone-100 p-1.5 rounded-xl">
            {['all', 'popular', 'trail', 'camp', 'hunting', 'llama'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all flex items-center gap-2 ${
                  filter === cat 
                    ? 'bg-white text-emerald-800 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {cat === 'popular' && <TrendingUp className="h-3.5 w-3.5" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Admin Upload Panel */}
        {isAdminMode && (
          <div className="mb-12 bg-white rounded-[2rem] border-2 border-dashed border-emerald-200 p-8 md:p-12 shadow-inner transition-all animate-in slide-in-from-top-4 duration-500">
            <form onSubmit={handleUpload} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Dropzone/Input */}
              <div 
                className={`relative aspect-video rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${
                  previewUrl ? 'border-emerald-500' : 'border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/30'
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                {previewUrl ? (
                  <>
                    <img src={previewUrl} className="w-full h-full object-cover" alt="Preview" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-bold flex items-center gap-2">
                        <Upload className="h-5 w-5" /> Change Photo
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-8">
                    <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-8 w-8 text-emerald-700" />
                    </div>
                    <p className="text-stone-900 font-bold mb-1">Upload Trail Photo</p>
                    <p className="text-stone-500 text-sm">Click to browse or drag and drop</p>
                  </div>
                )}
                <input 
                  type="file" 
                  hidden 
                  ref={fileInputRef} 
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>

              {/* Form Fields */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Caption</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Early morning packing in the Pintlers"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['trail', 'camp', 'hunting', 'llama'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setNewCategory(cat as any)}
                        className={`py-2.5 rounded-xl text-sm font-bold capitalize transition-all border ${
                          newCategory === cat 
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-md' 
                          : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={uploading || !previewUrl || !newCaption}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                      uploading || !previewUrl || !newCaption
                      ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                      : 'bg-emerald-700 text-white hover:bg-emerald-800 hover:scale-[1.02] active:scale-95'
                    }`}
                  >
                    {uploading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Publishing...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Publish to Gallery
                      </>
                    )}
                  </button>
                  {(!previewUrl || !newCaption) && !uploading && (
                    <p className="text-center text-stone-400 text-xs mt-3 flex items-center justify-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      Please select an image and enter a caption
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-stone-200 aspect-[4/3]"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">{img.category}</span>
                      <p className="text-white font-bold text-lg">{img.caption}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-300 text-xs font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md">
                      <Eye className="h-3 w-3" />
                      {img.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                  <Maximize2 className="h-5 w-5" />
                </div>
              </div>
              
              {img.views > 3000 && (
                <div className="absolute top-6 left-6">
                  <div className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
                    <TrendingUp className="h-2.5 w-2.5" />
                    Top Viewed
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img 
                src={selectedImage.url} 
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[80vh] object-contain" 
                alt={selectedImage.caption}
              />
              <div className="mt-6 text-center text-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-stone-400 uppercase tracking-widest text-sm">{selectedImage.category}</span>
                  <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                  <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
                    <Eye className="h-4 w-4" />
                    {selectedImage.views.toLocaleString()} views
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{selectedImage.caption}</h3>
              </div>
              <button 
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors font-bold flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="h-5 w-5" />
                Close Gallery
              </button>
            </div>
          </div>
        )}

        <div className="mt-20 bg-stone-100 rounded-3xl p-12 text-center border border-stone-200 shadow-inner">
          <Camera className="h-12 w-12 text-emerald-800 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-stone-600 max-w-lg mx-auto mb-8">
            Follow our daily adventures and see our newest herd members on our social media channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-stone-900 flex items-center justify-center gap-2">
               Instagram
             </a>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-stone-900 flex items-center justify-center gap-2">
               Facebook
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
