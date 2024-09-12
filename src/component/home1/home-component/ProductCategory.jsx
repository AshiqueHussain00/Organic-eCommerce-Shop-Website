import { Link } from "react-router-dom"
import Category from "../../common/Category"



const ProductCategory = () => {

    return (
        <section className="relative w-full pt-20 pb-20">
            <div className="w-10/12 mx-auto">
            <div className="flex flex-col items-center justify-between pt-10 pb-10 xs:flex-row">
                    <h1 className="text-[2rem] font-semibold">Popular Categories</h1>
                    <Link className="font-medium text-primary">View All →</Link>
                </div>
                <Category />

            </div>
        </section>
    )
}

export default ProductCategory
