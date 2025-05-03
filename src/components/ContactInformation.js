import React from 'react';

function ContactInformation() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Vizitați-ne</h2>          
          <div>
            <p className="text-lg font-medium text-gray-800 mb-2">
            Str. Alexandru Ioan Cuza nr 26, Scara 3, Parter <br />
            Târgu Jiu, Romania
            </p>
            <a href="#directions" className="inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300">Indicații rutiere</a>
          </div>
          
          <h3 className="text-xl font-bold text-teal-700 mb-4">Program</h3>
          <p className="text-gray-700 mb-1">Luni–Joi: 8:00–17:00</p>
          <p className="text-gray-700 mb-1">Vineri: 8:00–15:00</p>
          <p className="text-gray-700 mb-6">Sâmbătă–Duminică: Închis</p>
          
          <h3 className="text-xl font-bold text-teal-700 mb-4">Contact</h3>
          <p className="text-gray-700 mb-1"><span className="font-medium">Telefon:</span> (074) 123-4567</p>
          <p className="text-gray-700 mb-1"><span className="font-medium">Email:</span> contact@drbogdanbalaci.ro</p>
        </div>
        
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[300px]">
            <iframe
              title="Locația Cabinetului Dental"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.8518675266619!2d23.276362086868623!3d45.030939331301425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d8a6de841c927%3A0x1f0c44a5452a298f!2ssc.%203%2C%20Strada%20Alexandru%20Ioan%20Cuza%2026%2C%20T%C3%A2rgu%20Jiu%20210006!5e0!3m2!1sro!2sro!4v1746263390639!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation; 