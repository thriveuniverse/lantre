'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function History() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero
                title={t('history.title')}
                video="/lantre-histoire.mp4"
            />

            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title text-center mb-16">{t('history.title')}</h2>

                            <div className="prose prose-lg prose-primary max-w-none">
                                {/* Introduction */}
                                <p className="text-gray-700 leading-relaxed mb-12 text-xl first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                    {t('history.intro')}
                                </p>

                                {/* 13th Century Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">{t('history.century13.title')}</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.century13.p1')}
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.century13.p2')}
                                </p>

                                {/* 13th–14th Centuries Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">{t('history.century13_14.title')}</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.century13_14.p1')}
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.century13_14.p2')}
                                </p>

                                {/* Medieval to Early Modern Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">{t('history.medieval.title')}</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.medieval.p1')}
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.medieval.p2')}
                                </p>

                                {/* Across the Ages Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">{t('history.ages.title')}</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.ages.p1')}
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    {t('history.ages.p2')}
                                </p>

                                {/* Conclusion */}
                                <p className="text-gray-700 leading-relaxed mb-12 text-lg italic border-l-4 border-primary pl-6">
                                    {t('history.conclusion')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto p-12 rounded-3xl shadow-xl relative" style={{ background: 'var(--surface)' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold italic">
                            🍺
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">{t('history.cta.title')}</h3>
                        <p className="text-gray-600 italic mb-6">
                            {t('history.cta.text')}
                        </p>
                        <a href="/about" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg">
                            {t('history.cta.button')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
