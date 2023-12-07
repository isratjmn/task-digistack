import { IoMedicalOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { TbGenderAndrogyne } from "react-icons/tb";

const Card = ({ icon, title, description }) => {
	const renderIcon = () => {
		switch (icon) {
			case "genderAndrogyne":
				return (
					<TbGenderAndrogyne className="text-black text-6xl mb-4" />
				);
			case "medicalOutline":
				return (
					<IoMedicalOutline className="text-yellow-500 text-6xl mb-4" />
				);
			case "luBrain":
				return <LuBrain className="text-red-500 text-6xl mb-4" />;
			default:
				return null;
		}
	};

	return (
		<div className="w-1/2 p-8 bg-white border border-gray-300 shadow-md rounded-md mr-4">
			{icon && renderIcon()}
			{title && (
				<h3 className="text-gray-600 text-3xl font-bold mb-4 pt-10">
					{title}
				</h3>
			)}
			{description && (
				<p className="font-medium text-lg mb-4 pt-3">{description}</p>
			)}
		</div>
	);
};

export default Card;
