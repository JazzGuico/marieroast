import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-coffee-bean/80 max-w-2xl mx-auto">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">Address</h3>
                    <p className="text-coffee-bean/70">
                      123 Coffee Street, Roastery District
                      <br />
                      Manila, Philippines 1000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">Phone</h3>
                    <p className="text-coffee-bean/70">+63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">Email</h3>
                    <p className="text-coffee-bean/70">hello@marieroast.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-coffee-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-coffee-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-dark">Hours</h3>
                    <p className="text-coffee-bean/70">
                      Monday - Sunday: 05:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Subject" />
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-32"
                    rows={4}
                  />
                  <Button className="w-full bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90 font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
