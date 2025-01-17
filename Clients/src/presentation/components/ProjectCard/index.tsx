import { Typography, Box, useTheme } from "@mui/material";
import { FC, memo, useContext } from "react";
import euimg from "../../assets/imgs/eu-ai-act.jpg";
import ProgressBar from "./ProgressBar";
import { Btn, Card, styles, SubtitleValue, Title } from "./styles";
import { formatDate } from "../../tools/isoDateToString";
import useNavigateSearch from "../../../application/hooks/useNavigateSearch";
import { VerifyWiseContext } from "../../../application/contexts/VerifyWise.context";
import { User } from "../../../application/hooks/useProjectData";
import getProjectData from "../../../application/tools/getProjectData";
import { Assessments, Controls } from "../../../application/hooks/useProjectStatus";

export interface ProjectCardProps {
    id: number;
    project_title: string;
    owner: string;
    last_updated: string;
    assessments: Assessments;
    controls: Controls;
}

const ProgressBarRender: FC<{ progress: string | null; label: string, completed: number }> = memo(({ progress, label, completed }) => (
    <>
        <ProgressBar progress={progress} />
        <Typography sx={styles.progressBarTitle}>
            {progress} {label}{completed > 1 && 's'} completed
        </Typography>
    </>
));

const ProjectCard: FC<ProjectCardProps> = ({
    id,
    project_title,
    owner,
    last_updated,
    assessments,
    controls,
}) => {
    const theme = useTheme();
    const navigate = useNavigateSearch();
    const { dashboardValues } = useContext(VerifyWiseContext);
    const { users } = dashboardValues;

    const ownerUser: User = users.find((user: User) => user.id === owner) ?? '';

    const {
      controlsProgress,
      requirementsProgress,
      controlsCompleted,
      requirementsCompleted } = getProjectData({ projectId: id, assessments, controls });

    return (
      <Card>
        <Title variant="h5">{project_title}</Title>
        <Box sx={styles.upperBox}>
          <Box>
            <Typography
              variant="subtitle1"
              component="span"
              sx={styles.subtitle}
            >
              Project owner
            </Typography>
            <SubtitleValue>
              {ownerUser
                ? `${ownerUser.name} ${ownerUser.surname}`
                : "Unknown User"}
            </SubtitleValue>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              component="span"
              sx={styles.subtitle}
            >
              Last updated
            </Typography>
            <SubtitleValue>
             {(()=>{
                console.log("Raw Last Updated Value:", last_updated);
                const result = last_updated && /^\d{4}-\d{2}-\d{2}/.test(last_updated) ? formatDate(last_updated) : "N/A";
                console.log("Formatted last updated value:", result);
                return result;
             })()}
            </SubtitleValue>
          </Box>
        </Box>
        <ProgressBarRender
          progress={controlsProgress}
          label="control"
          completed={controlsCompleted}
        />
        <ProgressBarRender
          progress={requirementsProgress}
          label="requirement"
          completed={requirementsCompleted}
        />
        <Box sx={styles.lowerBox}>
          <Box sx={{ display: "flex", mb: 1.5 }}>
            <Box sx={styles.imageBox}>
              <img src={euimg} alt="EU AI Act" />
            </Box>
            <Typography sx={styles.imageTitle}>EU AI Act</Typography>
          </Box>
          <Btn
            variant="outlined"
            disableRipple={
              theme.components?.MuiButton?.defaultProps?.disableRipple
            }
            onClick={() =>
              navigate("/project-view", { projectId: id.toString() })
            }
          >
            View project
          </Btn>
        </Box>
      </Card>
    );
};

export default ProjectCard;