import haversine from "haversine";

const officeCoordinates = {
  latitude: -8.7116723,
  longitude: 115.177291,
};

const allowedRadius = 1000;

const checkingPosition = ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "Latitude dan Longitude diperlukan!" });
  }

  // Koordinat user
  const userCoordinates = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
  };

  // Menghitung jarak antara user dan lokasi kantor
  const distance = haversine(officeCoordinates, userCoordinates, {
    unit: "meter",
  });

  if (distance <= allowedRadius) {
    // Absensi berhasil jika dalam radius yang diperbolehkan
    return true;
  } else {
    // Jika terlalu jauh
    return false;
  }
};

export default checkingPosition;
