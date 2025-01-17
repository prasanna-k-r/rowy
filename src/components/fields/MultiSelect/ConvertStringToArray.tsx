import { IPopoverInlineCellProps } from "@src/components/fields/types";
import { Grid, Tooltip, Button } from "@mui/material";

export const ConvertStringToArray = ({
  value,
  onSubmit,
}: Pick<IPopoverInlineCellProps, "value" | "onSubmit">) => (
  <Grid container wrap="nowrap" alignItems="center">
    <Grid item xs style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
      {value}
    </Grid>
    <Grid item>
      <Tooltip title="It looks like this is a string. Click to convert to an array">
        <Button
          onClick={() => onSubmit([value])}
          style={{
            display: "flex",
            minWidth: 0,
            marginRight: -12,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          Fix
        </Button>
      </Tooltip>
    </Grid>
  </Grid>
);
