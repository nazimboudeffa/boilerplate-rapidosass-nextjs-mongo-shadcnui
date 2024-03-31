import Link from 'next/link'
import Image from 'next/image'
import tipeee from "/public/donations/tipeee_logo.svg"

function Caroussel () {
    return (
        <div className="flex overflow-hidden space-x-16 group">
        <div className="flex space-x-16 animate-loop-scroll">
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
            <Link href="https://fr.tipeee.com/nazimboudeffa"><Image src={tipeee} height={80} alt="tipee" /></Link>
        </div>
      </div>
    )
}

export default Caroussel