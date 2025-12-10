import Link from "next/link";
import BodyLayout from "@/src/components/essential-components/BodyLayout";

const NotFoundPage = () => {
  return (
    <section>
      <BodyLayout>
        <div className="flex flex-col items-center justify-center grow py-32 text-center h-[60vh]">
          <h1 className="text-9xl font-display font-bold text-foreground">
            404
          </h1>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-wide text-foreground">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-secondary-font-color max-w-md">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link
            href="/"
            className="mt-8 px-8 py-3 bg-foreground text-background rounded-full font-sans font-medium hover:opacity-90 transition-opacity"
          >
            Go Back Home
          </Link>
        </div>
      </BodyLayout>
    </section>
  );
};

export default NotFoundPage;
