import "./Card.scss";
import Image from "next/image";
import React from "react";
import { WindowIcon, EyeIcon, UserIcon } from "@heroicons/react/20/solid";

export type CardProps = {
  className?: string;
  select: boolean;
  img: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ className, img }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      <div className="cover">
        <div className="visibility">
          <EyeIcon width={20} />
          <div className="display">
            <WindowIcon width={20} />
            <p>Window</p>
          </div>
        </div>
        <Image src={img} width={286} height={142} alt="Imagem de capa" className="img" />
      </div>
      <div className="description bg-dark200">
        <div className="personal">
          <UserIcon width={20} />
          <p>Ana Cohen</p>
        </div>
        <div className="data">1</div>
      </div>
    </div>
  );
};

export default Card;
