import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const YogaLanding = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description:
        "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
    });
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Icon name="Lotus" className="h-8 w-8 text-[#9b87f5]" />
            <span className="font-montserrat text-xl font-bold">Гармония</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-[#9b87f5] transition-colors">
              О школе
            </a>
            <a
              href="#teachers"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Преподаватели
            </a>
            <a
              href="#programs"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Программы
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Отзывы
            </a>
          </nav>
          <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
            <a href="#contact">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[url('https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Раскройте свой потенциал через йогу
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Занятия с сертифицированными преподавателями, которые помогут вам
              достичь гармонии тела и разума
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                <a href="#programs">Наши программы</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                <a href="#about">Узнать больше</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              О нашей школе
            </h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              "Гармония" - это пространство, где мы объединяем тысячелетние
              традиции йоги с современными методиками, чтобы помочь вам найти
              баланс в жизни.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover-scale transition-all">
              <div className="bg-[#F2FCE2] rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-3">
                Наша миссия
              </h3>
              <p className="text-gray-600">
                Сделать практику йоги доступной для каждого, независимо от
                возраста и уровня подготовки.
              </p>
            </div>

            <div className="text-center p-6 hover-scale transition-all">
              <div className="bg-[#FEF7CD] rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-3">
                Наш подход
              </h3>
              <p className="text-gray-600">
                Индивидуальное внимание к каждому ученику с фокусом на
                правильной технике выполнения.
              </p>
            </div>

            <div className="text-center p-6 hover-scale transition-all">
              <div className="bg-[#E5DEFF] rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Medal" className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-3">
                Наши ценности
              </h3>
              <p className="text-gray-600">
                Уважение к традициям, внимательность, поддержка и непрерывное
                развитие.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-[#f9f9ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Наши преподаватели
            </h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Обучение проводят сертифицированные преподаватели с многолетним
              опытом практики и преподавания.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="Елена Михайлова"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Елена Михайлова</CardTitle>
                <CardDescription>Хатха-йога, Аштанга-йога</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Сертифицированный преподаватель с 10-летним опытом. Прошла
                  обучение в Индии и США.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#F2FCE2] text-sm py-1 px-3 rounded-full">
                    RYT-500
                  </span>
                  <span className="bg-[#FEF7CD] text-sm py-1 px-3 rounded-full">
                    Йогатерапия
                  </span>
                  <span className="bg-[#E5DEFF] text-sm py-1 px-3 rounded-full">
                    Пранаяма
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="Андрей Петров"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Андрей Петров</CardTitle>
                <CardDescription>Кундалини-йога, Медитация</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Практикует йогу более 15 лет. Специализируется на работе с
                  энергетическими практиками.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#F2FCE2] text-sm py-1 px-3 rounded-full">
                    IKYTA
                  </span>
                  <span className="bg-[#FEF7CD] text-sm py-1 px-3 rounded-full">
                    Медитация
                  </span>
                  <span className="bg-[#E5DEFF] text-sm py-1 px-3 rounded-full">
                    Аюрведа
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="Наталья Смирнова"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Наталья Смирнова</CardTitle>
                <CardDescription>
                  Виньяса-флоу, Йога для беременных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Преподаватель с медицинским образованием. Специализируется на
                  адаптивной йоге.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#F2FCE2] text-sm py-1 px-3 rounded-full">
                    RYT-200
                  </span>
                  <span className="bg-[#FEF7CD] text-sm py-1 px-3 rounded-full">
                    Пренатальная йога
                  </span>
                  <span className="bg-[#E5DEFF] text-sm py-1 px-3 rounded-full">
                    Реабилитация
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Наши программы
            </h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Мы предлагаем разнообразные направления йоги для любого уровня
              подготовки и целей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="bg-[#F2FCE2]">
                <CardTitle>Хатха-йога</CardTitle>
                <CardDescription>Для начинающих</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Основные асаны и правильное дыхание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Развитие гибкости и силы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Релаксация и снятие стресса</span>
                  </li>
                </ul>
                <p className="font-semibold text-lg">от 3 500 ₽/месяц</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                  <a href="#contact">Записаться</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="bg-[#E5DEFF]">
                <CardTitle>Аштанга-йога</CardTitle>
                <CardDescription>Для среднего уровня</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Динамичные виньясы и силовые асаны</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Развитие выносливости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Очищение и детоксикация</span>
                  </li>
                </ul>
                <p className="font-semibold text-lg">от 4 500 ₽/месяц</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                  <a href="#contact">Записаться</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="bg-[#FEF7CD]">
                <CardTitle>Кундалини-йога</CardTitle>
                <CardDescription>Духовные практики</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Пробуждение внутренней энергии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Медитативные техники</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Работа с чакрами и энергетикой</span>
                  </li>
                </ul>
                <p className="font-semibold text-lg">от 5 000 ₽/месяц</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                  <a href="#contact">Записаться</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="bg-[#FFDEE2]">
                <CardTitle>Индивидуальное обучение</CardTitle>
                <CardDescription>Персональный подход</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Программа под ваши цели</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Коррекция осанки и проблемных зон</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mt-0.5 shrink-0"
                    />
                    <span>Удобное расписание занятий</span>
                  </li>
                </ul>
                <p className="font-semibold text-lg">от 2 500 ₽/занятие</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                  <a href="#contact">Записаться</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#f9f9ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Отзывы о нас
            </h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Узнайте, что говорят о нашей школе наши ученики.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-6">
                  <div className="bg-white rounded-lg p-8 shadow-sm relative">
                    <div className="text-[#9b87f5] absolute -top-4 left-8 text-6xl">
                      "
                    </div>
                    <p className="italic text-gray-600 mb-6 relative z-10">
                      Занятия в "Гармонии" стали для меня настоящим спасением.
                      Регулярная практика помогла мне справиться со стрессом на
                      работе и улучшить осанку. Особенно ценю внимательность
                      преподавателей к технике выполнения асан.
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60"
                        alt="Екатерина Белова"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">Екатерина Белова</p>
                        <p className="text-sm text-gray-500">
                          Телеведущая, автор подкаста "В потоке"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-6">
                  <div className="bg-white rounded-lg p-8 shadow-sm relative">
                    <div className="text-[#9b87f5] absolute -top-4 left-8 text-6xl">
                      "
                    </div>
                    <p className="italic text-gray-600 mb-6 relative z-10">
                      После травмы спины врачи рекомендовали мне йогу, и я нашел
                      "Гармонию". Благодаря индивидуальному подходу Натальи, я
                      смог безопасно восстановиться и вернуться к активным
                      тренировкам. Теперь йога - неотъемлемая часть моей жизни.
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60"
                        alt="Алексей Орлов"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">Алексей Орлов</p>
                        <p className="text-sm text-gray-500">
                          Профессиональный спортсмен
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="p-6">
                  <div className="bg-white rounded-lg p-8 shadow-sm relative">
                    <div className="text-[#9b87f5] absolute -top-4 left-8 text-6xl">
                      "
                    </div>
                    <p className="italic text-gray-600 mb-6 relative z-10">
                      Я пришла в "Гармонию" с целью справиться с хроническим
                      стрессом и бессонницей. Курс медитации и йога-нидра с
                      Андреем буквально изменили мою жизнь. Я научилась
                      управлять эмоциями и наконец-то высыпаюсь. Рекомендую
                      всем!
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60"
                        alt="Мария Сорокина"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">Мария Сорокина</p>
                        <p className="text-sm text-gray-500">
                          Директор IT-компании
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#e5deff]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <h2 className="font-montserrat text-3xl font-bold mb-4">
                Запишитесь на бесплатное занятие
              </h2>
              <p className="text-gray-600">
                Оставьте свои контактные данные, и мы свяжемся с вами для
                уточнения деталей.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <Input id="name" placeholder="Имя" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="program" className="font-medium">
                  Интересующее направление йоги
                </label>
                <select
                  id="program"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
                >
                  <option value="">Выберите направление</option>
                  <option value="hatha">Хатха-йога</option>
                  <option value="ashtanga">Аштанга-йога</option>
                  <option value="kundalini">Кундалини-йога</option>
                  <option value="personal">Индивидуальное обучение</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Ваши вопросы или пожелания"
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreement"
                  className="mt-1"
                  required
                />
                <label htmlFor="agreement" className="text-sm text-gray-600">
                  Я согласен на обработку персональных данных и принимаю
                  <a href="#" className="text-[#9b87f5] hover:underline">
                    {" "}
                    условия соглашения
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]"
                size="lg"
              >
                Записаться на бесплатное занятие
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#271911] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Lotus" className="h-8 w-8 text-[#6b4226]" />
                <span className="font-montserrat text-xl font-bold">
                  Гармония
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Ваш путь к гармонии тела и разума через практику йоги.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#6b4226]">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#6b4226]">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#6b4226]">
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#6b4226]">
                  <Icon name="Telegram" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">
                Навигация
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-[#6b4226]"
                  >
                    О школе
                  </a>
                </li>
                <li>
                  <a
                    href="#teachers"
                    className="text-gray-400 hover:text-[#6b4226]"
                  >
                    Преподаватели
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="text-gray-400 hover:text-[#6b4226]"
                  >
                    Программы
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-[#6b4226]"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-[#6b4226]"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">
                Программы
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6b4226]">
                    Хатха-йога
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6b4226]">
                    Аштанга-йога
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6b4226]">
                    Кундалини-йoga
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6b4226]">
                    Йога для беременных
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#6b4226]">
                    Детская йога
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">
                Контакты
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon
                    name="MapPin"
                    className="h-5 w-5 text-[#6b4226] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-400">
                    г. Москва, ул. Йоги, д. 108
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    name="Phone"
                    className="h-5 w-5 text-[#6b4226] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-400">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    name="Mail"
                    className="h-5 w-5 text-[#6b4226] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-400">info@harmony-yoga.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    name="Clock"
                    className="h-5 w-5 text-[#6b4226] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-400">Пн-Вс: 8:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Школа йоги "Гармония". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YogaLanding;
