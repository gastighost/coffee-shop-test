import { useRouter } from 'next/router'
import Link from 'next/link';

const DonerRestaurant = () => {
  const router = useRouter();
  return <div>Doner Kebab Restaurant {router.query.id}
  <Link href="/">
    <a>Back to home</a>
  </Link>
  <Link href="/doner-restaurant/dynamic">
    Go to page dynamic
  </Link></div>
}

export default DonerRestaurant;
