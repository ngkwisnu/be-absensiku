const checkLateStatus = () => {
  const expectedCheckInTime = "16:15:00";
  const currentDate = new Date().toISOString().split("T")[0];
  const dateTimeExpected = new Date(`${currentDate}T${expectedCheckInTime}`);
  const checkInTime = new Date();
  if (dateTimeExpected < checkInTime) {
    return true;
  }
  return false;
};

export default checkLateStatus;
