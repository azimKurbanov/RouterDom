import React from 'react';
import { Phone, Mail, MapPin, Clock, Users, Trophy, Star, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-400 rounded"></div>
              <span className="text-2xl font-bold text-gray-800">TRUE</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">О СТУДИИ</a>
              <a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">ПРОГРАММЫ</a>
              <a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">ТРЕНИРОВКИ</a>
              <a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">РАСПИСАНИЕ</a>
              <a href="#" className="text-gray-700 hover:text-cyan-400 transition-colors">КОНТАКТЫ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">ПРЕИМУЩЕСТВА TRUE FITNESS</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Создание идеального тела с помощью уникальных тренировок и персонального подхода
          </p>
          <button className="bg-white text-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            НАЧАТЬ ТРЕНИРОВКИ
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Персональные тренировки" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ</h3>
              <p className="text-gray-600 text-sm">
                Индивидуальный подход к каждому клиенту с учетом физических особенностей и целей
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Групповые занятия" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ГРУППОВЫЕ ЗАНЯТИЯ</h3>
              <p className="text-gray-600 text-sm">
                Мотивирующая атмосфера группы для достижения лучших результатов
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Современное оборудование" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h3>
              <p className="text-gray-600 text-sm">
                Новейшее фитнес-оборудование для эффективных тренировок
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Профессиональные тренеры" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ПРОФЕССИОНАЛЬНЫЕ ТРЕНЕРЫ</h3>
              <p className="text-gray-600 text-sm">
                Сертифицированные тренеры с многолетним опытом работы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Features Row */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Питание" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ПРОГРАММЫ ПИТАНИЯ</h3>
              <p className="text-gray-600 text-sm">
                Индивидуальные планы питания для достижения целей
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552105/pexels-photo-1552105.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Кардио тренировки" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">КАРДИОТРЕНИРОВКИ</h3>
              <p className="text-gray-600 text-sm">
                Эффективные кардио программы для сжигания жира
              </p>
            </div>

            {/* Feature Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Силовые тренировки" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">СИЛОВЫЕ ТРЕНИРОВКИ</h3>
              <p className="text-gray-600 text-sm">
                Программы для набора мышечной массы и увеличения силы
              </p>
            </div>

            {/* Feature Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Реабилитация" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">РЕАБИЛИТАЦИЯ</h3>
              <p className="text-gray-600 text-sm">
                Специальные программы для восстановления после травм
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-400 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">ГОТОВЫ НАЧАТЬ?</h2>
          <p className="text-xl mb-8">
            БРЕНД TRUE FITNESS ВХОДИТ В ТОП 3 ПОПУЛЯРНЫХ ФИТНЕС-СЕТЕЙ 
            МИТЕС-ОБСЛУЖИВАНИЯ В РОССИИ
          </p>
          <button className="bg-white text-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 bg-gray-800 text-white relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552241/pexels-photo-1552241.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">ПОЛУЧИТЕ</h2>
            <h3 className="text-2xl mb-8 text-cyan-400">ПЕРСОНАЛЬНУЮ КОНСУЛЬТАЦИЮ И ПЛАН ТРЕНИРОВОК ОТ ТРЕНЕРОВ TRUE FITNESS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 mb-4 bg-white bg-opacity-20 rounded border border-gray-300 text-white placeholder-gray-300"
                />
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className="w-full p-3 mb-4 bg-white bg-opacity-20 rounded border border-gray-300 text-white placeholder-gray-300"
                />
                <button className="w-full bg-cyan-400 text-white py-3 rounded font-semibold hover:bg-cyan-500 transition-colors">
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p>+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@truefitness.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p>г. Москва, ул. Фитнес, д. 1</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p>Пн-Вс: 06:00 - 24:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-400 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О КОМПАНИИ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Наши тренеры</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">ТРЕНИРОВКИ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200 transition-colors">Персональные</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Групповые</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Кардио</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Силовые</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">УСЛУГИ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200 transition-colors">Абонементы</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Питание</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Реабилитация</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">КОНТАКТЫ</h3>
              <div className="space-y-2">
                <p>+7 (495) 123-45-67</p>
                <p>info@truefitness.ru</p>
                <p>г. Москва, ул. Фитнес, д. 1</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
            <p>&copy; 2024 TRUE FITNESS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;