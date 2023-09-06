from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="st_tabs",
    version="0.0.1",
    author="Pratham Jha",
    author_email="prathamjha5683@gmail.com",
    description="Streamlit component that allows you to do customize your tabbar as per your need",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/PrathamJha1/st_tabs",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.7",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit >= 0.63",
    ],
    extras_require={
        "devel": [
            "wheel",
            "pytest==7.4.0",
            "playwright==1.36.0",
            "requests==2.31.0",
            "pytest-playwright-snapshot==1.0",
            "pytest-rerunfailures==12.0",
        ]
    }
)
