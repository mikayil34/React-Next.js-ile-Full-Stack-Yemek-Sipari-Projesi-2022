import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)] container mx-auto">
        <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
        <Image
          src="/../public/images/hero-bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
        </div>
    
      <div className="relative z-50  text-white top-48 flex flex-col  items-start gap-y-10">
        <Title className="text-6xl">Fast Food Resturant </Title>
        <p  className="text-sm w-2/5">
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p >
        <button className="btn-primary"> Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
