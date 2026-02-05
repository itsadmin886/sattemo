import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            კონტაქტი
          </h2>
          <p className="text-muted-foreground mb-12">
            გაქვთ კითხვა ან გსურთ შეკვეთის განთავსება? დაგვიკავშირდით ნებისმიერ დროს
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">მისამართი</h3>
              <p className="text-sm text-muted-foreground text-center">
                თელავის რ-ნი სოფ. რუისპირი
                <br />
                საქართველო
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ტელეფონი</h3>
              <p className="text-sm text-muted-foreground">
                599-53-14- 34 <br/> 555-25 -99-38

              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ელ-ფოსტა</h3>
              <p className="text-sm text-muted-foreground">
                Sattemo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
