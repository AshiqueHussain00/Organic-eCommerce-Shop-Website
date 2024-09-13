import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";

export const HeaderBottomData = [
    {
        id: 1,
        icon: TbTruckDelivery, // Use the component reference, not JSX here
        title: 'Free Shipping',
        description: 'Free shipping on all your order'
    },
    {
        id: 2,
        icon: RiCustomerService2Fill, // Same here
        title: 'Customer Support 24/7',
        description: 'Instant access to Support'
    },
    {
        id: 3,
        icon: IoBagCheckOutline, // Same here
        title: '100% Secure Payment',
        description: 'We ensure your money is safe'
    },
    {
        id: 4,
        icon: PiPackage, // Same here
        title: 'Money-Back Guarantee',
        description: '30 Days Money-Back Guarantee'
    },
];
