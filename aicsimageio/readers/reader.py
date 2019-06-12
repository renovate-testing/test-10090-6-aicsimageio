#!/usr/bin/env python
# -*- coding: utf-8 -*-

from abc import ABC, abstractmethod
import io
from pathlib import Path
from typing import Any

from .. import types


class Reader(ABC):

    _bytes = None

    _data = None
    _dims = None
    _metadata = None

    @staticmethod
    def convert_to_bytes_io(file: types.FileLike) -> io.BufferedIOBase:
        # Check path
        if isinstance(file, (str, Path)):
            # This will both fully expand and enforce that the filepath exists
            f = Path(file).expanduser().resolve(strict=True)

            # This will check if the above enforced filepath is a directory
            if f.is_dir():
                raise IsADirectoryError(f)

            return open(f, "rb")

        # Convert bytes
        elif isinstance(file, bytes):
            return io.BytesIO(file)

        # Set bytes
        elif isinstance(file, io.BytesIO):
            return file

        # Raise
        else:
            raise TypeError(
                f"Reader only accepts types: [str, pathlib.Path, bytes, io.BytesIO], received: {type(file)}"
            )

    def __init__(self, file: types.FileLike):
        # Convert to BytesIO
        self._bytes = self.convert_to_bytes_io(file)

    @staticmethod
    @abstractmethod
    def _is_this_type(buffer: io.BufferedIOBase) -> bool:
        pass

    @classmethod
    def is_this_type(cls, file: types.FileLike) -> bool:
        byte_io = cls.convert_to_bytes_io(file)
        return cls._is_this_type(byte_io)

    @property
    @abstractmethod
    def data(self) -> types.SixDArray:
        pass

    @property
    @abstractmethod
    def dims(self) -> str:
        pass

    @property
    @abstractmethod
    def metadata(self) -> Any:
        pass

    def load(self) -> types.LoadResults:
        return types.LoadResults(self.data, self.dims, self.metadata)

    def close(self) -> None:
        self._bytes.close()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()
