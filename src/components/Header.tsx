import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "./ui/button";

const Header = () => {

  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img
        src='/logo.svg'
        alt='logo'
        width={150}
        height={100}
        className="cursor-pointer"
        onClick={() => window.location.href = '/'}
      />

      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-110 hover:shadow-xl transition-all cursor-pointer hover:text-primary">Home</li>
        <li className="font-medium hover:scale-110 hover:shadow-xl transition-all cursor-pointer hover:text-primary">Search</li>
        <li className="font-medium hover:scale-110 hover:shadow-xl transition-all cursor-pointer hover:text-primary">New</li>
        <li className="font-medium hover:scale-110 hover:shadow-xl transition-all cursor-pointer hover:text-primary">Pre-Owned</li>
      </ul>

      {isSignedIn ?
        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: '40px',
                  height: '40px',
                },
              },
            }}
          />
          <Button className="bg-primary text-primary-foreground">Submit Listing</Button>
        </div>
        :
        <Button className="bg-primary text-primary-foreground">Submit Listing</Button>
      }
    </div>
  )
}

export default Header