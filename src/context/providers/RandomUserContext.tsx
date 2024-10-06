"use client";
import { ReactNode, useEffect, useState } from "react";
import { RandomUserContext } from "../random-user";

export function RandomUserProvider({ children }: { children: ReactNode }) {
  const [testimonies, setTestimonies] = useState<any>([]);
  const [teams, setTeams] = useState<any>([]);

  // console.log(modalActive);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let testimonies = JSON.parse(localStorage.getItem("testimonies")!);
      let teams = JSON.parse(localStorage.getItem("teams")!);
      // console.log(testimonies);

      if (!testimonies || !teams) {
        const result = async () => {
          const response = await fetch("https://randomuser.me/api/?results=30", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return response.json();
        };
        result().then((e) => {
          // console.log(e.results);
          const testimonials = [
            {testimonies:"I recently purchased a beautiful handcrafted coffee table from Nyoo Kayu Woodworking. The quality is exceptional, and it adds a rustic charm to my living room. Highly recommended!"},
            {testimonies:"Nyoo Kayu Woodworking created a custom bookshelf for my home office. The craftsmanship is outstanding, and they perfectly matched the wood to my existing furniture. Great service!"},
            {testimonies:"I had an old rocking chair that was falling apart, and Nyoo Kayu Woodworking repaired it to perfection. It looks and feels brand new again. Amazing repair service!"},
            {testimonies:"The dining table we ordered from Nyoo Kayu Woodworking is stunning. The finish is flawless, and it's become the centerpiece of our dining room. Excellent quality and craftsmanship."},
            {testimonies:"I requested a custom-made wooden bed frame, and Nyoo Kayu Woodworking delivered beyond my expectations. The attention to detail and the quality of wood used are top-notch. Fantastic work!"},
            {testimonies:"Our antique dresser needed some serious restoration, and Nyoo Kayu Woodworking did an incredible job. It looks better than it did originally. Superb restoration service!"},
            {testimonies:"Nyoo Kayu Woodworking's ready-to-use bookshelf is perfect for our study. It's sturdy, well-finished, and arrived in perfect condition. Couldn't be happier with the purchase."},
            {testimonies:"We ordered a custom dining set, and Nyoo Kayu Woodworking crafted it beautifully. The set is elegant and exactly what we envisioned. Outstanding custom woodworking!"},
            {testimonies:"Nyoo Kayu Woodworking repaired our old wooden wardrobe, which had a broken door and loose hinges. They restored it to its former glory. Exceptional repair service!"},
            {testimonies:"I bought a finished wooden bench from Nyoo Kayu Woodworking for our garden. It's not only aesthetically pleasing but also very durable. A great addition to our outdoor space."},
            {testimonies:"The custom wooden picture frames we ordered are perfect. Nyoo Kayu Woodworking did a fantastic job matching them to our decor. Highly satisfied!"},
            {testimonies:"We needed a unique gift for a friend's housewarming, and Nyoo Kayu Woodworking's custom wall art was the perfect choice. Beautiful craftsmanship!"},
            {testimonies:"Nyoo Kayu Woodworking's team built a fantastic custom closet organizer for us. It's incredibly functional and looks great. Highly recommend their custom services!"},
            {testimonies:"I had a broken antique cabinet that I thought was beyond repair, but Nyoo Kayu Woodworking restored it to its original beauty. Their repair skills are unmatched."},
            {testimonies:"Our new kitchen island from Nyoo Kayu Woodworking is both beautiful and functional. The craftsmanship is superb, and it was delivered on time. Excellent product!"},
            {testimonies:"The outdoor wooden swing we bought from Nyoo Kayu Woodworking is now the favorite spot in our garden. It's sturdy, comfortable, and looks fantastic. Great addition!"},
            {testimonies:"Nyoo Kayu Woodworking made a custom mantelpiece for our fireplace. It has transformed the room with its elegance and quality. Couldn't be happier with the result!"},
            {testimonies:"We commissioned Nyoo Kayu Woodworking to create a wooden playhouse for our kids. It's beautifully made, safe, and has brought endless joy to our children. Outstanding work!"},
            {testimonies:"I ordered a custom wooden desk for my home office, and Nyoo Kayu Woodworking delivered exactly what I envisioned. The quality and attention to detail are excellent."},
            {testimonies:"Nyoo Kayu Woodworking's custom cutting boards are the best. I ordered several as gifts, and everyone loves them. Beautifully made and very functional!"},
            {testimonies:"Our new wooden garden trellis from Nyoo Kayu Woodworking is perfect. It’s sturdy and adds a beautiful touch to our garden. Very happy with the purchase."},
            {testimonies:"The handcrafted jewelry box we bought is a piece of art. The detail and finish are remarkable. Nyoo Kayu Woodworking exceeded our expectations!"},
            {testimonies:"Nyoo Kayu Woodworking built a custom media console for us. It's stylish, well-crafted, and fits perfectly in our living room. Fantastic job!"},
            {testimonies:"We had Nyoo Kayu Woodworking repair an old wooden gate, and it looks like new again. Their repair service is top-notch!"},
            {testimonies:"Our custom wooden headboard from Nyoo Kayu Woodworking has transformed our bedroom. It's beautifully crafted and exactly what we wanted. Highly recommended!"}
          ];
          
          const companyTeam = [
            {
              position: "Head Carpenter",
              expertise: "Custom Woodworking and Furniture Design"
            },
            {
              position: "Finishing Specialist",
              expertise: "Wood Finishing and Surface Treatments"
            },
            {
              position: "Repair Technician",
              expertise: "Furniture Repair and Restoration"
            },
            {
              position: "Project Manager",
              expertise: "Project Coordination and Client Relations"
            },
            {
              position: "Woodcraft Designer",
              expertise: "Creative Woodcraft Design and Prototyping"
            },
            {
              position: "Quality Control Inspector",
              expertise: "Quality Assurance and Material Inspection"
            },
            {
              position: "CNC Machine Operator",
              expertise: "Automated Wood Cutting and Shaping"
            },
            {
              position: "Sales Manager",
              expertise: "Client Acquisition and Sales Strategy"
            },
            {
              position: "Logistics Coordinator",
              expertise: "Inventory Management and Distribution"
            },
            {
              position: "Marketing Specialist",
              expertise: "Brand Promotion and Digital Marketing"
            },
            {
              position: "IT Specialist",
              expertise: "Network Management and Technical Support"
            },
            {
              position: "Customer Service Representative",
              expertise: "Client Assistance and Service Coordination"
            },
            {
              position: "Warehouse Manager",
              expertise: "Storage and Inventory Organization"
            },
            {
              position: "Accounts Manager",
              expertise: "Financial Management and Bookkeeping"
            },
            {
              position: "Procurement Officer",
              expertise: "Material Sourcing and Supplier Relations"
            }
          ];
          let theTestimonies = [...e.results.slice(16)].map((e: any, i: number) => {
            // e.testimonies = testimonials[i];
            return {...e,...testimonials[i]};
          })
          let theTeams = [...e.results.slice(0, 15)].map((e: any, i: number)=>{
            // e.position = companyTeam[i].position
            // e.expertise = companyTeam[i].expertise
            return {...e, ...companyTeam[i]}
          })
          setTestimonies(theTestimonies);
          setTeams(theTeams);
          localStorage.setItem('testimonies', JSON.stringify(theTestimonies))
          localStorage.setItem('teams',JSON.stringify(theTeams))
        });
      } else {
        setTestimonies(testimonies)
        setTeams(teams)
      }
    }
  }, []);
  // console.log(teams);
  
  return (
    <RandomUserContext.Provider
      value={{
        testimonies,
        setTestimonies,
        teams,
        setTeams,
      }}>
      {children}
    </RandomUserContext.Provider>
  );
}
