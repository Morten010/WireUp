"use client"
import Logo from "@/assets/Logo";
import LoadingScreen from "@/components/LoadingScreen";
import CreateProjectButton from "@/components/custom-ui/CreateProjectButton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useProject } from "@/store/useProject";
import Link from "next/link";

export default function Home() {
  const state = useProject()
  return (
    <main
    className="p-5 w-full h-screen pt-18  max-w-screen-lg mx-auto"
    >
      {/* branding */}
      <nav
      className="absolute p-5 left-2/4 -translate-x-2/4 top-0 flex justify-between w-full max-w-screen-lg"
      >
        <div
        className="flex items-center text-lg font-bold tracking-wider"
        >
          <Logo
          className="dark:text-white w-14 h-14"
          />
          WireUp
        </div>

        <CreateProjectButton
        key="create-project-btn"
        />
      </nav>
      {/* branding */}

      {/* hero */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mt-20">
        <h1 className="text-8xl font-bold text-center md:text-[200px] leading-[1.5]">
          Projects
        </h1>
        <p
        className="text-center font-bold"
        >
          Make development easier, wire it up.
        </p>
      </div>
      {/* hero */}

      {/* projects */}
      <div
      className="flex flex-wrap gap-2 pt-10"
      >
        {state?.projects && state?.projects.map((project, index) => (
          <Link
          key={index + project.name}
          href={`/project/${project.id}`}
          className="max-w-[320px] w-full min-w-[210px]"
          >
            <Card
            className="w-full"
            >
              <CardHeader>
                <CardTitle
                className="text-xl"
                >
                  {project.name}
                </CardTitle>
                <p>
                  {project.description ? project.description : "No description"}
                </p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {/* projects */}

    </main>
  );
}
