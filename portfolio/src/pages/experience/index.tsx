import { ListItem } from "@/components/list-item";

const Experience = () => {
    return (
        <section className="pt-24" id="experience">
            <div className="w-full text-2xl pl-4">
                <h1 className="font-bold">Experience</h1>
            </div>

            {/* Experience */}
            <div className="w-full h-fit mt-4">
                <ul className="flex flex-col space-y-4">
                    <a href="https://github.com/securejobs/">
                        <ListItem
                            arg1={"JAN 2025 - PRESENT"}
                            arg2={"Software Engineer & Manager"}
                            arg3={"SecureJobs"}
                            arg4={"Meticulously overseeing and building infrastructure to expand a Software-as-a-Serivice (SaaS) for end-users. Working closely with teams, developing databases, load balancing mechanisms, and writing optimised endpoints, advocating best practices with scalability in mind for future front-end components."}
                        />
                    </a>

                    <a href="https://youtu.be/gWEz8ktEuuQ/">
                        <ListItem
                            arg1={"FEB 2022 - MAY 2022"}
                            arg2={"Network Technician"}
                            arg3={"Next Theme"}
                            arg4={"Configured a Power Edge R360 Server on RAID 1 to install Ubuntu OS. This was mission-critical for setting up Role-based Access Controls (RBAC) for performing certain low-level functionality. Afterwards, I setup a LAN FTP protocol for transferring data across Nodes. "}
                        />
                    </a>

                    <a href="https://www.linkedin.com/company/spacebar-wsm/">
                        <ListItem
                            arg1={"JAN - FEB 2022"}
                            arg2={"Developer"}
                            arg3={"Space Bar"}
                            arg4={"Used a Content Management System (CMS) to build websites on behalf of less technical clients. Worked on setting up an internal hosting for each CMS to handle the distribution of traffic over custom Domain Name Servers (DNS)."}
                        />
                    </a>
                </ul>
            </div>
        </section>
    )
};

export default Experience;