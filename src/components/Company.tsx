import { CompanyOverview, CompanyOverviewInterface } from "./CompanyOverview";
import logo from '../../public/assets/logo-bordered.png'
function Company() {
  const companyOverviewData: CompanyOverviewInterface[] = [
    // {
    //   theImage:
    //     logo.src,
    //   children: ( 
    //     <>
    //       <p className="py-6">
    //         <b>Nyoo Kayu Woodworking</b> was established in 2010 by <b>Markus Udayana</b> and operates in Kabupaten
    //         Tangerang, Banten Province, Indonesia. What began a woodworking as  hobby has evolved into a passion-driven. The company blends craftsmanship with sustainability to create premium, eco-friendly furniture.
    //       </p>
    //     </>
    //   )
    //   ,
    //   shadow: false
    // },
    {
      theImage:
        "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      children: ( 
        <>
          <p className="py-6">
            <i><b>'Nyoo'</b></i> signifies 'bermain' or 'mainan' (as a verb), reflecting our frequent engagement with wood
            craftsmanship, <i><b>'Kayu'</b></i> represents our primary material—wood, and <i><b>'Woodworking'</b></i> underscores our expertise. Each piece is meticulously crafted to ensure durability and quality, enhancing both aesthetics and
            functionality. We use water-based, non-toxic finishes that are safe for humans and the environment, and our
            commitment to sustainability is demonstrated through the use of recycled pine wood. Explore our range,
            including child-friendly educational blocks, and experience the dedication embedded in every piece.
          </p>
        </>
      )
      ,
      shadow: true
    },
    {
      theImage:
        "https://images.unsplash.com/photo-1585800935411-d7d7eed23ccc?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      children: ( 
        <>
          <p className="py-6">
            We use water-based, non-toxic finishes that are safe for humans and the environment, and our
            commitment to sustainability is demonstrated through the use of recycled pine wood. Explore our range,
            including child-friendly educational blocks, and experience the dedication embedded in every piece.
          </p>
        </>
      )
      ,
      shadow: true

    },
  ];
  let reverse = false;
  return(
    <>
      {companyOverviewData.map((data, i) => {
        data.reverse = reverse;
        reverse = !reverse;
        return <CompanyOverview key={i} {...data} />;
      })}
    </>
  )
}

export {Company}