import aboutImage from "@/assets/about-dairy.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue-light rounded-2xl opacity-50" />
              <img
                src={aboutImage}
                alt="ტრადიციული ყველის წარმოება"
                className="relative w-full h-80 md:h-96 object-cover rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ჩვენს შესახებ
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ჩვენი ბიზნესიდეა დაიბადა საქართველოში ტურიზმის სწრაფი განვითარების ფონზე. კახეთი, რომელიც წლის ყველა სეზონზე უამრავ ტურისტს მასპინძლობს, უძველესი დროიდან ცნობილია მესაქონლეობითა და მაღალი ხარისხის, ეკოლოგიურად სუფთა რძით. სწორედ ამ ტრადიციაზე დაყრდნობით გადავწყვიტეთ რძის პროდუქტების წარმოება.

ჩვენ ვთანამშრომლობთ ადგილობრივ ფერმერებთან, რომლებთანაც ხელშეკრულებები გვაქვს და რომლებიც მაქსიმალურად ორიენტირებულნი არიან ხარისხიანი რძის მიწოდებაზე. ჩვენი საწარმო აღჭურვილია თანამედროვე დანადგარებით, სადაც ყოველდღიურად ხდება პროდუქციის ხარისხის კონტროლი.

ჩვენთვის ხარისხი მთავარი პრიორიტეტია — სწორედ მასზეა აგებული ჩვენი ბიზნესი. კონკურენტებისგან გვარჩევს სერტიფიცირებული ტექნოლოგების გუნდი, ეკოლოგიურად სუფთა გარემო და მომხმარებელზე ზრუნვა.

„ყველის სახლი – სათემო“ უკვე 10 წელია ემსახურება თელავის რაიონისა და თბილისის რესტორნებსა და სასტუმროებს. ჩვენი პროდუქცია მზადდება 100% ნატურალური, ნედლი რძისგან და ინარჩუნებს ავთენტურ ქართულ გემოს.
              </p>
            
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
