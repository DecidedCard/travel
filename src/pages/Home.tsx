import mainImage from '../assets/mainimage.jpeg'; 
import {Button, Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useQuery } from '@tanstack/react-query';

const Home: React.FC = () => {
  return (
  <div>
      <img src={mainImage} alt="Main" className="w-full h-[396px] block" />
      <div className="mt-10 flex">
        <Button color="primary" className='ml-5 mr-5'>
          최신순
        </Button>
        <Button color="default"> 
          댓글순
        </Button>
      </div>
      <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
  );
};


export default Home;