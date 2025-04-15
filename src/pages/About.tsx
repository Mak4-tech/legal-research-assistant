
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Scale, Award, Users, Building, GraduationCap } from "lucide-react";

const About = () => {
  // Mock authentication status
  const isAuthenticated = false;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  About LegalAssist
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
                  Transforming legal research with advanced technology
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Making Legal Research Accessible
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  At LegalAssist, we believe that legal information should be accessible and understandable to everyone. 
                  Our mission is to leverage advanced technology to simplify legal research and empower legal professionals 
                  and students with powerful comparative analysis tools.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl bg-gradient-to-b from-primary/20 to-background flex items-center justify-center">
                  <Scale className="h-32 w-32 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Meet the Experts Behind LegalAssist
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our team combines legal expertise with technical innovation
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Legal Experts</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced attorneys and legal scholars who ensure the accuracy of our legal content
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Researchers</h3>
                  <p className="text-sm text-muted-foreground">
                    Academic professionals who continuously update and expand our legal database
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Tech Innovators</h3>
                  <p className="text-sm text-muted-foreground">
                    Engineers and data scientists who develop our advanced NLP technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Values
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
                  The principles that guide our work and innovation
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">Accuracy</h3>
                <p className="text-muted-foreground">
                  We are committed to providing precise and reliable legal information, ensuring that our comparative analysis tools deliver trustworthy results.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with legal technology, developing new solutions that make research more efficient.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe in making legal information accessible to all, breaking down barriers to legal knowledge and research.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-muted-foreground">
                  We are dedicated to supporting legal education, providing tools that help students and professionals deepen their understanding of legal concepts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Us
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Email us at:</p>
                <p className="text-primary">contact@legalassist.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Our Office:</p>
                <p className="text-muted-foreground">
                  123 Legal Avenue, Suite 500<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center justify-between">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 LegalAssist. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:underline underline-offset-4">
              About
            </a>
            <a href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="/terms" className="hover:underline underline-offset-4">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default About;
