import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { ListItemButton, ListItemText, List, Grid, Typography, Divider, Paper, Box } from '@mui/material';
import { concatMultipleStrings } from './DraggableUtils';
import { listItemsAssigned, listItemsUnassigned } from './DraggableMockedData';
import { DraggableComponentProps } from './DraggableTypes';
import { StrictModeDroppable } from './StrictModeDroppable';


const DraggableTwoTables: React.FC<DraggableComponentProps> = (props) => {
  const [itemsAssigned, setItemsAssigned] = useState(listItemsAssigned)
  const [itemsUnassigned, setItemsUnassigned] = useState(listItemsUnassigned)


  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {

      const sourceList = source.droppableId === 'itemsAssigned' ? itemsAssigned : itemsUnassigned;
      const items = Array.from(sourceList);
      const [draggedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, draggedItem);

      if (source.droppableId === 'itemsAssigned') {
        setItemsAssigned(items);
      } else {
        setItemsUnassigned(items);
      }
    } else {
      const sourceList = source.droppableId === 'itemsAssigned' ? itemsAssigned : itemsUnassigned;
      const destList = destination.droppableId === 'itemsAssigned' ? itemsAssigned : itemsUnassigned;
      const [draggedItem] = sourceList.splice(source.index, 1);
      destList.splice(destination.index, 0, draggedItem);

      setItemsAssigned([...itemsAssigned]);
      setItemsUnassigned([...itemsUnassigned]);
    }
  };

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '80%',
  };

  const styleForList = {
    width: '100%'
  }

  return (
    <Paper elevation={4}>
      <Box sx={{
        pt: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        minWidth: "430px"
      }}>
        <Typography variant='h4' textAlign={"center"}>Draggable Tables</Typography>
        <Divider sx={{ marginBottom: "15px", marginTop: "5px" }} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid container columns={2} spacing={2} flexDirection={"row"}>
            <Grid item columns={1} minWidth={"200px"} border={"ActiveBorder"}>
              <Paper elevation={4} sx={{ padding: "5px" }}>
                <Typography sx={{ justifyContent: 'center' }}>Assigned items</Typography>
                <StrictModeDroppable droppableId="itemsAssigned">
                  {(provided) => (
                    <List dense={false} {...provided.droppableProps} ref={provided.innerRef} sx={{ ...styleForList }}>
                      {itemsAssigned.map(({ itemId, itemProp1, itemProp2 }, index) => (
                        <Draggable key={itemId} draggableId={itemId} index={index}>
                          {(provided, snapshot) => (
                            <ListItemButton
                              sx={{ ...commonStyles, borderRadius: 1 }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}

                            >
                              <ListItemText
                                primary={itemProp1}
                                secondary={concatMultipleStrings(itemProp2)}
                              />
                            </ListItemButton>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </List>
                  )}

                </StrictModeDroppable>
              </Paper>
            </Grid>
            <Grid item columns={1} minWidth={"200px"}>
              <Paper elevation={4} sx={{ padding: "5px" }}>
                <Typography sx={{ justifyContent: 'center' }}>Unassigned items</Typography>
                <StrictModeDroppable droppableId="itemsUnassigned">
                  {(provided) => (
                    <List dense={false} {...provided.droppableProps} ref={provided.innerRef} sx={{ ...styleForList }}>
                      {itemsUnassigned.map(({ itemId, itemProp1, itemProp2 }, index) => (
                        <Draggable key={itemId} draggableId={itemId} index={index}>
                          {(provided, snapshot) => (
                            <ListItemButton
                              sx={{ ...commonStyles, borderRadius: 1 }}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}

                            >
                              <ListItemText
                                primary={itemProp1}
                                secondary={concatMultipleStrings(itemProp2)}
                              />
                            </ListItemButton>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </List>
                  )}
                </StrictModeDroppable>
              </Paper>
            </Grid>
          </Grid>
        </DragDropContext>
      </Box>
    </Paper>
  );
};

export default DraggableTwoTables;