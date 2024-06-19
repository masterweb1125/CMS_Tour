"use client"
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  MonthView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  Toolbar,
  ViewSwitcher,
  AllDayPanel,
  EditRecurrenceMenu,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  LocalizationProvider,
  DateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { appointments } from '../../../utils/data/demo.js';

const Demo = () => {
  const [data, setData] = useState(appointments);
  const [currentDate, setCurrentDate] = useState('2018-06-27');
  const [editingFormVisible, setEditingFormVisible] = useState(false);
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointment, setEditingAppointment] = useState(undefined);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [deletedAppointmentId, setDeletedAppointmentId] = useState(undefined);

  const toggleEditingFormVisibility = () => {
    setEditingFormVisible(!editingFormVisible);
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let newData = data;
    if (added) {
      const startingAddedId = newData.length > 0 ? newData[newData.length - 1].id + 1 : 0;
      newData = [...newData, { id: startingAddedId, ...added }];
    }
    if (changed) {
      newData = newData.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
      ));
    }
    if (deleted !== undefined) {
      setDeletedAppointmentId(deleted);
      setConfirmationVisible(true);
    }
    setData(newData);
  };

  const commitDeletedAppointment = () => {
    setData(data.filter(appointment => appointment.id !== deletedAppointmentId));
    setConfirmationVisible(false);
  };

  return (
    <Paper style={{margin:'0 0 30px 0'}}>
      <Scheduler data={data} height={800}>
        <ViewState currentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <WeekView startDayHour={9} endDayHour={19} />
        <MonthView />
        <AllDayPanel />
        <EditRecurrenceMenu />
        <Appointments />
        <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
        <Toolbar />
        <ViewSwitcher />
        <AppointmentForm overlayComponent={() => null} visible={editingFormVisible} onVisibilityChange={toggleEditingFormVisibility} />
        <DragDropProvider />
      </Scheduler>
      <Dialog open={confirmationVisible} onClose={() => setConfirmationVisible(false)}>
        <DialogTitle>Delete Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this appointment?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmationVisible(false)} color="primary" variant="outlined">Cancel</Button>
          <Button onClick={commitDeletedAppointment} color="secondary" variant="outlined">Delete</Button>
        </DialogActions>
      </Dialog>
      {/* <Fab color="secondary" onClick={() => setEditingFormVisible(true)} style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab> */}
    </Paper>
  );
};

export default Demo;
