import Image from 'next/image';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchPlanets } from '@/hooks';
import Planets from '@/components/planets/planets';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['planets'],
    queryFn: () => fetchPlanets(),
  });

  return (
    <main className="flex min-h-screen flex-col py-10 px-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          className="relative"
          src="/star-wars-outlined.svg"
          alt="Star Wars Logo"
          width={193}
          height={193}
          priority
        />
      </div>

      <div className="relative z-10 mt-10 w-full place-items-center">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Planets />
        </HydrationBoundary>
      </div>
    </main>
  );
}
