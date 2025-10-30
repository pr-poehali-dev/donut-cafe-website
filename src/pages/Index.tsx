import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const donuts = [
    {
      name: 'Классический глазированный',
      description: 'Воздушный пончик с нежной глазурью',
      price: '150 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/a2584fa3-9085-41b0-96f0-d02f3c0fe558.jpg'
    },
    {
      name: 'Шоколадный рай',
      description: 'С шоколадной глазурью и посыпкой',
      price: '170 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/6b8caa74-f48c-4c9d-b1d9-65ecb5029ad4.jpg'
    },
    {
      name: 'Ягодный восторг',
      description: 'Со свежими ягодами и легким кремом',
      price: '180 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/a2584fa3-9085-41b0-96f0-d02f3c0fe558.jpg'
    },
    {
      name: 'Карамельная мечта',
      description: 'С соленой карамелью и орехами',
      price: '190 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/6b8caa74-f48c-4c9d-b1d9-65ecb5029ad4.jpg'
    },
    {
      name: 'Ванильное облако',
      description: 'Нежный пончик с ванильным кремом',
      price: '160 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/a2584fa3-9085-41b0-96f0-d02f3c0fe558.jpg'
    },
    {
      name: 'Цитрусовый взрыв',
      description: 'С лимонной глазурью и цедрой',
      price: '175 ₽',
      image: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/6b8caa74-f48c-4c9d-b1d9-65ecb5029ad4.jpg'
    }
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/6b8caa74-f48c-4c9d-b1d9-65ecb5029ad4.jpg',
      alt: 'Ассортимент пончиков'
    },
    {
      url: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/618282c1-aa57-464c-ad97-0593496aebb9.jpg',
      alt: 'Интерьер пончиковой'
    },
    {
      url: 'https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/a2584fa3-9085-41b0-96f0-d02f3c0fe558.jpg',
      alt: 'Свежие пончики'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-vanilla/30 to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-peach/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold font-caveat text-primary">
              Пончиковая 🍩
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-all hover:text-primary ${
                  activeSection === 'home' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className={`transition-all hover:text-primary ${
                  activeSection === 'menu' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`transition-all hover:text-primary ${
                  activeSection === 'gallery' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`transition-all hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold font-caveat text-primary mb-6">
            Свежие пончики каждый день!
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Уютная пончиковая с домашней атмосферой. Готовим с любовью из натуральных ингредиентов.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
            onClick={() => scrollToSection('menu')}
          >
            Смотреть меню
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="container mx-auto mt-16">
          <img
            src="https://cdn.poehali.dev/projects/43c29176-ed40-4e59-b956-936a6d5822e7/files/6b8caa74-f48c-4c9d-b1d9-65ecb5029ad4.jpg"
            alt="Свежие пончики"
            className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto object-cover h-[500px] animate-scale-in"
          />
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-caveat text-center text-primary mb-4">
            Наше меню
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Каждый пончик приготовлен с любовью
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donuts.map((donut, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-2 border-peach/20 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={donut.image}
                    alt={donut.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-caveat text-primary mb-2">
                    {donut.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{donut.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{donut.price}</span>
                    <Button size="sm" className="rounded-full">
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold font-caveat text-center text-primary mb-4">
            Галерея
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Загляните к нам в гости
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 h-80"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold font-caveat text-center text-primary mb-12">
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-peach/20 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Сладкая, д. 15
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Время работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Вс: 8:00 - 21:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (495) 123-45-67
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-2 border-peach/20 bg-gradient-to-br from-vanilla/30 to-peach/20">
              <h3 className="text-2xl font-bold font-caveat text-primary mb-4">
                Приходите к нам!
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы всегда рады гостям. Свежая выпечка, ароматный кофе и уютная атмосфера ждут вас каждый день!
              </p>
              <Button className="w-full rounded-full" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать нам
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-peach/20 bg-white/80">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="font-caveat text-xl">
            Пончиковая © 2024. Сделано с любовью 🍩
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
