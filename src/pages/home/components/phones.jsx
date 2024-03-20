import React from 'react'
import Slider from 'react-slick'
import Button from '../../../components/ui/button/button';
import useGetPhones from '../service/query/useGetPhones';
import AddToCart from '../../../assets/icon/AddToCart';

const Phones = () => {
    const {data} = useGetPhones()
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true
      };
  return (
    <div className='py-4 px-10'>
      <h2 className="text-text font-semibold text-2xl mb-6">Смартфоны и планшеты</h2>
      <Slider {...settings}>
        {data?.map((item) => (
            <div key={item.id}>
                <div className='mx-3'>
                    <div className='transition hover:shadow-xl hover:-translate-y-2 rounded-xl pt-1 pl-1 pr-4 pb-[14px] relative'>
                        <div className='w-[165px] h-[165px] mb-[14px]'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h3 className='text-text font-normal text-base'>{item.brand}</h3>
                        <h2 className='text-text font-normal text-base mb-6'>{item.title}</h2>
                        <div className='flex items-center gap-1'>
                            <p className='text-text font-semibold text-lg'>{item.price} so`m</p>
                            <Button variant={'primary'}>
                                <AddToCart/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default Phones
