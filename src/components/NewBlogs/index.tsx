import React, { useState } from 'react';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { TipTapEditor } from './TipTapEditor';

interface BlogSection {
  id: string;
  title: string;
  image: string;
  content: string;
}

interface BlogPost {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  coverImage: string;
  author: string;
  sections: BlogSection[];
}

export const NewBlogForm = () => {
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    coverImage: '',
    author: '',
    sections: [
      {
        id: 'section-1',
        title: '',
        image: '',
        content: '',
      },
    ],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectionChange = (id: string, field: keyof BlogSection, value: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) => (sec.id === id ? { ...sec, [field]: value } : sec)),
    }));
  };

  const addSection = () => {
    setFormData((prev) => {
      const newIndex = prev.sections.length + 1;
      return {
        ...prev,
        sections: [
          ...prev.sections,
          {
            id: `section-${Date.now()}`,
            title: `Section ${newIndex}`,
            image: '',
            content: '',
          },
        ],
      };
    });
  };

  const removeSection = (id: string) => {
    if (formData.sections.length === 1) return;
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((sec) => sec.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Publishing Blog:', formData);
    // Submit to your API
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Create New Blog Post</h1>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors"
        >
          Publish Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">General Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter blog title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50"
                    placeholder="e.g. healthy-eating-tips"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Author name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                <input
                  type="text"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">SEO Meta Data</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="SEO Title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="health, fitness, wellness"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="Brief description for search engines..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info or Tips Sidebar could go here, or just let details take full width. For now just spacing. */}
        <div className="hidden lg:block space-y-4">
           <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl text-blue-900">
             <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
               📝 Editor Tips
             </h3>
             <ul className="text-sm space-y-2 text-blue-800 list-disc list-inside">
               <li>Add multiple sections using the plus button below.</li>
               <li>Scroll horizontally to view and edit all sections.</li>
               <li>Use the rich text editor to format your content.</li>
             </ul>
           </div>
        </div>
      </div>

      {/* Sections Area (Horizontal Scrolling) */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Content Sections</h2>
          <button
            onClick={addSection}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Plus size={18} /> Add Section
          </button>
        </div>

        {/* Scrollable Container for left to right layout */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
          {formData.sections.map((section, index) => (
            <div 
              key={section.id} 
              className="flex-none w-[90%] md:w-[600px] bg-white rounded-xl shadow-md border border-gray-200 flex flex-col snap-center hover:shadow-lg transition-shadow"
            >
              <div className="border-b border-gray-100 p-4 bg-gray-50 flex justify-between items-center rounded-t-xl">
                <span className="font-semibold text-gray-700">Section {index + 1}</span>
                <button
                  onClick={() => removeSection(section.id)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-md transition-colors"
                  disabled={formData.sections.length === 1}
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="p-5 space-y-4 flex-grow flex flex-col">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Main heading for this section"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Section Image URL</label>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-2 rounded-lg border border-gray-200">
                      <ImageIcon size={20} className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      value={section.image}
                      onChange={(e) => handleSectionChange(section.id, 'image', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Image URL mapping to this section"
                    />
                  </div>
                </div>

                <div className="flex-grow flex flex-col pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Section Content</label>
                  <TipTapEditor
                    content={section.content}
                    onChange={(richText) => handleSectionChange(section.id, 'content', richText)}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add Section Card placeholder */}
          <div 
            onClick={addSection}
            className="flex-none w-[300px] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer snap-center min-h-[400px]"
          >
            <div className="bg-white p-4 rounded-full shadow-sm mb-3">
               <Plus size={32} />
            </div>
            <span className="font-medium text-lg">Add New Section</span>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default NewBlogForm;
