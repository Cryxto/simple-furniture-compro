import Image from "next/image";

export interface TeamCardInterface {
  name?: { first?: string; last?: string; title?: string };
  position?: string;
  expertise?: string;
  picture?: { large?: string; medium?: string; thumbnail?: string };
  email?: string;
  phone?: string;
}
function TeamCard({ props }: { props: TeamCardInterface }) {
  const defaultValue = {
    name: "Peter Foo",
    position: "Super Hero",
    expertise: "Webbing",
    picture: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
    email: "peter@foo.mail",
    phone: "08123123331",
  };
  // var fullName = null
  // if (props.name) {
  //   fullName = props.name.first +' '+props.name.last
  // }
  return (
    <>
      <div className="card md:card-side bg-[#f8f8f8] drop-shadow-lg  shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_-10px_15px_-3px_rgba(0,0,0,0.1)] text-gray-900 w-[28rem] h-full  max-sm:max-w-72 max-sm:w-full  items-center">
        <figure className="pt-5 mt-5 md:py-5 md:my-5 w-full">
          <Image
            width={1000}
            height={1000}
            src={props.picture!.large || defaultValue.picture}
            alt="Movie"
            className="object-cover w-28 h-28 max-sm:h-28 max-sm:w-28  rounded-full"
          />
        </figure>
        <div className="card-body w-full text-center items-center text-xs">
          <h2 className="font-extrabold card-title text-sm">
            {props.name ? props.name.first + " " + props.name.last : false || defaultValue.name}
          </h2>
          <p className="italic font-semibold flex-grow-0">{props.position || defaultValue.position}</p>
          <p className="font-medium">{props.expertise || defaultValue.expertise}</p>
          <p className="font-medium">{props.email || defaultValue.email}</p>
          <p className="font-medium">{props.phone || defaultValue.phone}</p>
        </div>
      </div>
    </>
  );
}

export { TeamCard };
