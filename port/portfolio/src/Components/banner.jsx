import React, { useEffect, useState } from 'react';

const BannerAnimado = () => {
    const [showBanner, setShowBanner] = useState(false);

    // Simula un efecto de carga que muestra el banner después de 1 segundo
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowBanner(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`flex justify-center items-center h-screen bg-gray-100`}>
            {showBanner && (
                <div className={`bg-blue-500 text-white rounded-lg shadow-lg p-6 mx-4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 animate-slide-in`}>
                    <h1 className={`text-3xl font-bold mb-4`}>¡Bienvenido a Latitud42.tech!</h1>
                    <p className={`text-lg`}>Explora tu potencial digital con nuestras soluciones tecnológicas innovadoras.</p>
                </div>
            )}
        </div>
    );
};

export default BannerAnimado;
