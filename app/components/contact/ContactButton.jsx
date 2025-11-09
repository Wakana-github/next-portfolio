import Link from "next/link"


const ContactButton = () => {
  return (
    <Link href='#contact'>
        <div className="rounded-full pink-to-blue px-8 py-2 md:px-10 md:py-3 shadow-lg cursor-pointer text-white transition duration-300 hover:scale-105 inline-block dark:border-2 dark:border-gray-500" >
                        contact
        </div>
    </Link>
  )
}

export default ContactButton