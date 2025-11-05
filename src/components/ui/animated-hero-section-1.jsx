import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const AnimatedHero = ({
  backgroundImageUrl,
  logo,
  navLinks,
  topRightAction,
  title,
  description,
  ctaButton,
  secondaryCta,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define the new reusable glass button style
  const glassButtonClassName =
    "bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20 transition-colors";

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-white shadow-md text-gray-900" 
            : "bg-transparent text-white"
        )}
      >
        <div className="flex h-20 w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2">{logo}</div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">{topRightAction}</div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "md:hidden backdrop-blur-md",
              isScrolled 
                ? "bg-white/95 border-t border-gray-200" 
                : "bg-black/80"
            )}
          >
            <div className="flex flex-col gap-4 px-6 py-4 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {topRightAction && (
                <div className={cn(
                  "pt-2 border-t",
                  isScrolled ? "border-gray-200" : "border-white/20"
                )}>
                  {topRightAction}
                </div>
              )}
            </div>
          </motion.nav>
        )}
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start justify-center text-left px-6 md:px-12 max-w-4xl w-full text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-xl lg:text-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80"
        >
          {description}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center gap-x-4"
        >
          <Button
            onClick={ctaButton.onClick}
            size="lg"
            className={glassButtonClassName}
          >
            {ctaButton.text}
          </Button>
          {secondaryCta && (
            <Button
              onClick={secondaryCta.onClick}
              size="lg"
              className={glassButtonClassName}
            >
              {secondaryCta.text}
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
