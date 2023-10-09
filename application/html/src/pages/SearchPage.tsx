import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import Search from "../components/Search";

export default function SearchPage() {
    const navigate = useNavigate();
    const handleSearch = (query) => {
        //need to add some logic here for search
        console.log('Searching for: ', query);
    };

    return (
        <>
            <Flex justifyContent="center" class="h-full text-center">
                <div>
                    <p>Upload tracking number</p>
                    <Search onSearch={handleSearch} />
                    <div class="underline">
                        <p
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Return to Home Page
                        </p>
                    </div>
                </div>
            </Flex>
        </>
    );
}