Search.setIndex({docnames:["aicsimageio","aicsimageio.readers","aicsimageio.vendor","aicsimageio.writers","changelog","contributing","index","installation","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["aicsimageio.rst","aicsimageio.readers.rst","aicsimageio.vendor.rst","aicsimageio.writers.rst","changelog.rst","contributing.rst","index.rst","installation.rst","modules.rst"],objects:{"":{aicsimageio:[0,0,0,"-"]},"aicsimageio.aics_image":{AICSImage:[0,1,1,""],imread:[0,3,1,""],imread_dask:[0,3,1,""]},"aicsimageio.aics_image.AICSImage":{client:[0,2,1,""],close:[0,2,1,""],cluster:[0,2,1,""],dask_data:[0,2,1,""],data:[0,2,1,""],determine_reader:[0,2,1,""],get_channel_names:[0,2,1,""],get_image_dask_data:[0,2,1,""],get_image_data:[0,2,1,""],metadata:[0,2,1,""],reader:[0,2,1,""],shape:[0,2,1,""],size:[0,2,1,""],size_c:[0,2,1,""],size_s:[0,2,1,""],size_t:[0,2,1,""],size_x:[0,2,1,""],size_y:[0,2,1,""],size_z:[0,2,1,""],view_napari:[0,2,1,""]},"aicsimageio.buffer_reader":{BufferReader:[0,1,1,""]},"aicsimageio.buffer_reader.BufferReader":{INTEL_ENDIAN:[0,4,1,""],MOTOROLA_ENDIAN:[0,4,1,""],read_bytes:[0,2,1,""],read_uint16:[0,2,1,""],read_uint32:[0,2,1,""],read_uint64:[0,2,1,""],reset:[0,2,1,""]},"aicsimageio.constants":{Dimensions:[0,1,1,""]},"aicsimageio.constants.Dimensions":{Channel:[0,4,1,""],DefaultOrder:[0,4,1,""],DefaultOrderList:[0,4,1,""],Scene:[0,4,1,""],SpatialX:[0,4,1,""],SpatialY:[0,4,1,""],SpatialZ:[0,4,1,""],Time:[0,4,1,""]},"aicsimageio.dask_utils":{cluster_and_client:[0,3,1,""],shutdown_cluster_and_client:[0,3,1,""],spawn_cluster_and_client:[0,3,1,""]},"aicsimageio.exceptions":{ConflictingArgumentsError:[0,5,1,""],InconsistentShapeError:[0,5,1,""],InvalidDimensionOrderingError:[0,5,1,""],UnsupportedFileFormatError:[0,5,1,""]},"aicsimageio.readers":{arraylike_reader:[1,0,0,"-"],czi_reader:[1,0,0,"-"],default_reader:[1,0,0,"-"],ome_tiff_reader:[1,0,0,"-"],reader:[1,0,0,"-"],tiff_reader:[1,0,0,"-"]},"aicsimageio.readers.arraylike_reader":{ArrayLikeReader:[1,1,1,""]},"aicsimageio.readers.arraylike_reader.ArrayLikeReader":{dask_data:[1,2,1,""],dims:[1,2,1,""],metadata:[1,2,1,""]},"aicsimageio.readers.czi_reader":{CziReader:[1,1,1,""]},"aicsimageio.readers.czi_reader.CziReader":{ZEISS_10BYTE:[1,4,1,""],ZEISS_2BYTE:[1,4,1,""],dask_data:[1,2,1,""],dims:[1,2,1,""],dtype:[1,2,1,""],get_channel_names:[1,2,1,""],get_physical_pixel_size:[1,2,1,""],metadata:[1,2,1,""],size_c:[1,2,1,""],size_s:[1,2,1,""],size_t:[1,2,1,""],size_x:[1,2,1,""],size_y:[1,2,1,""],size_z:[1,2,1,""]},"aicsimageio.readers.default_reader":{DefaultReader:[1,1,1,""]},"aicsimageio.readers.default_reader.DefaultReader":{dask_data:[1,2,1,""],dims:[1,2,1,""],metadata:[1,2,1,""]},"aicsimageio.readers.ome_tiff_reader":{OmeTiffReader:[1,1,1,""]},"aicsimageio.readers.ome_tiff_reader.OmeTiffReader":{get_channel_names:[1,2,1,""],get_physical_pixel_size:[1,2,1,""],is_ome:[1,2,1,""],metadata:[1,2,1,""],size_c:[1,2,1,""],size_s:[1,2,1,""],size_t:[1,2,1,""],size_x:[1,2,1,""],size_y:[1,2,1,""],size_z:[1,2,1,""]},"aicsimageio.readers.reader":{Reader:[1,1,1,""]},"aicsimageio.readers.reader.Reader":{client:[1,2,1,""],close:[1,2,1,""],cluster:[1,2,1,""],dask_data:[1,2,1,""],data:[1,2,1,""],dims:[1,2,1,""],guess_dim_order:[1,2,1,""],is_this_type:[1,2,1,""],metadata:[1,2,1,""]},"aicsimageio.readers.tiff_reader":{TiffReader:[1,1,1,""]},"aicsimageio.readers.tiff_reader.TiffReader":{dask_data:[1,2,1,""],dims:[1,2,1,""],dtype:[1,2,1,""],get_image_description:[1,2,1,""],load_slice:[1,2,1,""],metadata:[1,2,1,""]},"aicsimageio.transforms":{reshape_data:[0,3,1,""],transpose_to_dims:[0,3,1,""]},"aicsimageio.types":{LoadResults:[0,1,1,""]},"aicsimageio.types.LoadResults":{data:[0,4,1,""],dims:[0,4,1,""],metadata:[0,4,1,""]},"aicsimageio.vendor":{omexml:[2,0,0,"-"]},"aicsimageio.vendor.omexml":{DO_XYTZC:[2,6,1,""],MPI_CMYK:[2,6,1,""],OMEXML:[2,1,1,""],OM_ARTIST:[2,6,1,""],OM_BITS_PER_SAMPLE:[2,6,1,""],OM_CELL_LENGTH:[2,6,1,""],OM_CELL_WIDTH:[2,6,1,""],OM_DATE_TIME:[2,6,1,""],OM_DOCUMENT_NAME:[2,6,1,""],OM_FILL_ORDER:[2,6,1,""],OM_FREE_BYTECOUNTS:[2,6,1,""],OM_FREE_OFFSETS:[2,6,1,""],OM_GRAY_RESPONSE_CURVE:[2,6,1,""],OM_GRAY_RESPONSE_UNIT:[2,6,1,""],OM_HOST_COMPUTER:[2,6,1,""],OM_IMAGE_LENGTH:[2,6,1,""],OM_IMAGE_WIDTH:[2,6,1,""],OM_INK_SET:[2,6,1,""],OM_MAKE:[2,6,1,""],OM_MAX_SAMPLE_VALUE:[2,6,1,""],OM_MIN_SAMPLE_VALUE:[2,6,1,""],OM_MODEL:[2,6,1,""],OM_NEW_SUBFILE_TYPE:[2,6,1,""],OM_ORIENTATION:[2,6,1,""],OM_PAGE_NUMBER:[2,6,1,""],OM_PREDICTOR:[2,6,1,""],OM_RESOLUTION_UNIT:[2,6,1,""],OM_SAMPLES_PER_PIXEL:[2,6,1,""],OM_SOFTWARE:[2,6,1,""],OM_T4_OPTIONS:[2,6,1,""],OM_T6_OPTIONS:[2,6,1,""],OM_THRESHHOLDING:[2,6,1,""],OM_TILE_BYTE_COUNT:[2,6,1,""],OM_TILE_LENGTH:[2,6,1,""],OM_TILE_OFFSETS:[2,6,1,""],OM_TILE_WIDTH:[2,6,1,""],OM_TRANSFER_FUNCTION:[2,6,1,""],OM_WHITE_POINT:[2,6,1,""],OM_X_POSITION:[2,6,1,""],OM_X_RESOLUTION:[2,6,1,""],OM_Y_POSITION:[2,6,1,""],OM_Y_RESOLUTION:[2,6,1,""],PC_PLANAR:[2,6,1,""],PI_CFA_ARRAY:[2,6,1,""],get_float_attr:[2,3,1,""],get_int_attr:[2,3,1,""],get_namespaces:[2,3,1,""],get_pixel_type:[2,3,1,""],get_text:[2,3,1,""],make_text_node:[2,3,1,""],page_name_original_metadata:[2,3,1,""],qn:[2,3,1,""],set_text:[2,3,1,""],split_qn:[2,3,1,""],xsd_now:[2,3,1,""]},"aicsimageio.vendor.omexml.OMEXML":{Channel:[2,1,1,""],Image:[2,1,1,""],OriginalMetadata:[2,1,1,""],Pixels:[2,1,1,""],Plane:[2,1,1,""],Plate:[2,1,1,""],PlatesDucktype:[2,1,1,""],StructuredAnnotations:[2,1,1,""],TiffData:[2,1,1,""],Well:[2,1,1,""],WellSample:[2,1,1,""],WellSampleDucktype:[2,1,1,""],WellsDucktype:[2,1,1,""],get_image_count:[2,2,1,""],get_ns:[2,2,1,""],image:[2,2,1,""],image_count:[2,2,1,""],plates:[2,2,1,""],root_node:[2,2,1,""],set_image_count:[2,2,1,""],structured_annotations:[2,2,1,""],to_xml:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Channel":{Color:[2,2,1,""],ID:[2,2,1,""],Name:[2,2,1,""],SamplesPerPixel:[2,2,1,""],get_Color:[2,2,1,""],get_ID:[2,2,1,""],get_Name:[2,2,1,""],get_SamplesPerPixel:[2,2,1,""],set_Color:[2,2,1,""],set_ID:[2,2,1,""],set_Name:[2,2,1,""],set_SamplesPerPixel:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Image":{AcquisitionDate:[2,2,1,""],ID:[2,2,1,""],Name:[2,2,1,""],Pixels:[2,2,1,""],get_AcquisitionDate:[2,2,1,""],get_ID:[2,2,1,""],get_Name:[2,2,1,""],set_AcquisitionDate:[2,2,1,""],set_ID:[2,2,1,""],set_Name:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.OriginalMetadata":{has_key:[2,2,1,""],iteritems:[2,2,1,""],keys:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Pixels":{Channel:[2,2,1,""],DimensionOrder:[2,2,1,""],ID:[2,2,1,""],PhysicalSizeX:[2,2,1,""],PhysicalSizeY:[2,2,1,""],PhysicalSizeZ:[2,2,1,""],PixelType:[2,2,1,""],Plane:[2,2,1,""],SizeC:[2,2,1,""],SizeT:[2,2,1,""],SizeX:[2,2,1,""],SizeY:[2,2,1,""],SizeZ:[2,2,1,""],TiffData:[2,2,1,""],append_channel:[2,2,1,""],channel_count:[2,2,1,""],get_DimensionOrder:[2,2,1,""],get_ID:[2,2,1,""],get_PhysicalSizeX:[2,2,1,""],get_PhysicalSizeY:[2,2,1,""],get_PhysicalSizeZ:[2,2,1,""],get_PixelType:[2,2,1,""],get_SizeC:[2,2,1,""],get_SizeT:[2,2,1,""],get_SizeX:[2,2,1,""],get_SizeY:[2,2,1,""],get_SizeZ:[2,2,1,""],get_channel_count:[2,2,1,""],get_channel_names:[2,2,1,""],get_plane_count:[2,2,1,""],get_planes_of_channel:[2,2,1,""],plane_count:[2,2,1,""],populate_TiffData:[2,2,1,""],remove_channel:[2,2,1,""],set_DimensionOrder:[2,2,1,""],set_ID:[2,2,1,""],set_PhysicalSizeX:[2,2,1,""],set_PhysicalSizeY:[2,2,1,""],set_PhysicalSizeZ:[2,2,1,""],set_PixelType:[2,2,1,""],set_SizeC:[2,2,1,""],set_SizeT:[2,2,1,""],set_SizeX:[2,2,1,""],set_SizeY:[2,2,1,""],set_SizeZ:[2,2,1,""],set_channel_count:[2,2,1,""],set_plane_count:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Plane":{DeltaT:[2,2,1,""],ExposureTime:[2,2,1,""],PositionX:[2,2,1,""],PositionY:[2,2,1,""],PositionZ:[2,2,1,""],TheC:[2,2,1,""],TheT:[2,2,1,""],TheZ:[2,2,1,""],get_DeltaT:[2,2,1,""],get_PositionX:[2,2,1,""],get_PositionY:[2,2,1,""],get_PositionZ:[2,2,1,""],get_TheC:[2,2,1,""],get_TheT:[2,2,1,""],get_TheZ:[2,2,1,""],set_DeltaT:[2,2,1,""],set_PositionX:[2,2,1,""],set_PositionY:[2,2,1,""],set_PositionZ:[2,2,1,""],set_TheC:[2,2,1,""],set_TheT:[2,2,1,""],set_TheZ:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Plate":{ColumnNamingConvention:[2,2,1,""],Columns:[2,2,1,""],Description:[2,2,1,""],ExternalIdentifier:[2,2,1,""],ID:[2,2,1,""],Name:[2,2,1,""],RowNamingConvention:[2,2,1,""],Rows:[2,2,1,""],Status:[2,2,1,""],Well:[2,2,1,""],WellOriginX:[2,2,1,""],WellOriginY:[2,2,1,""],get_ColumnNamingConvention:[2,2,1,""],get_Columns:[2,2,1,""],get_Description:[2,2,1,""],get_ExternalIdentifier:[2,2,1,""],get_ID:[2,2,1,""],get_Name:[2,2,1,""],get_RowNamingConvention:[2,2,1,""],get_Rows:[2,2,1,""],get_Status:[2,2,1,""],get_Well:[2,2,1,""],get_WellOriginX:[2,2,1,""],get_WellOriginY:[2,2,1,""],get_well_name:[2,2,1,""],set_ColumnNamingConvention:[2,2,1,""],set_Columns:[2,2,1,""],set_Description:[2,2,1,""],set_ExternalIdentifier:[2,2,1,""],set_ID:[2,2,1,""],set_Name:[2,2,1,""],set_RowNamingConvention:[2,2,1,""],set_Rows:[2,2,1,""],set_Status:[2,2,1,""],set_WellOriginX:[2,2,1,""],set_WellOriginY:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.PlatesDucktype":{newPlate:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.StructuredAnnotations":{OriginalMetadata:[2,2,1,""],add_original_metadata:[2,2,1,""],get_original_metadata_refs:[2,2,1,""],get_original_metadata_value:[2,2,1,""],has_key:[2,2,1,""],has_original_metadata:[2,2,1,""],iter_original_metadata:[2,2,1,""],keys:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.TiffData":{FirstC:[2,2,1,""],FirstT:[2,2,1,""],FirstZ:[2,2,1,""],IFD:[2,2,1,""],PlaneCount:[2,2,1,""],get_FirstC:[2,2,1,""],get_FirstT:[2,2,1,""],get_FirstZ:[2,2,1,""],get_IFD:[2,2,1,""],get_PlaneCount:[2,2,1,""],set_FirstC:[2,2,1,""],set_FirstT:[2,2,1,""],set_FirstZ:[2,2,1,""],set_IFD:[2,2,1,""],set_PlaneCount:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.Well":{Column:[2,2,1,""],ExternalDescription:[2,2,1,""],ExternalIdentifier:[2,2,1,""],ID:[2,2,1,""],Row:[2,2,1,""],Sample:[2,2,1,""],get_Color:[2,2,1,""],get_Column:[2,2,1,""],get_ExternalDescription:[2,2,1,""],get_ExternalIdentifier:[2,2,1,""],get_ID:[2,2,1,""],get_Row:[2,2,1,""],get_Sample:[2,2,1,""],set_Color:[2,2,1,""],set_Column:[2,2,1,""],set_ExternalDescription:[2,2,1,""],set_ExternalIdentifier:[2,2,1,""],set_ID:[2,2,1,""],set_Row:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellSample":{ID:[2,2,1,""],ImageRef:[2,2,1,""],Index:[2,2,1,""],PositionX:[2,2,1,""],PositionY:[2,2,1,""],Timepoint:[2,2,1,""],get_ID:[2,2,1,""],get_ImageRef:[2,2,1,""],get_Index:[2,2,1,""],get_PositionX:[2,2,1,""],get_PositionY:[2,2,1,""],get_Timepoint:[2,2,1,""],set_ID:[2,2,1,""],set_ImageRef:[2,2,1,""],set_Index:[2,2,1,""],set_PositionX:[2,2,1,""],set_PositionY:[2,2,1,""],set_Timepoint:[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellSampleDucktype":{"new":[2,2,1,""]},"aicsimageio.vendor.omexml.OMEXML.WellsDucktype":{"new":[2,2,1,""]},"aicsimageio.writers":{ome_tiff_writer:[3,0,0,"-"],png_writer:[3,0,0,"-"],writer:[3,0,0,"-"]},"aicsimageio.writers.ome_tiff_writer":{OmeTiffWriter:[3,1,1,""]},"aicsimageio.writers.ome_tiff_writer.OmeTiffWriter":{close:[3,2,1,""],save:[3,2,1,""],save_slice:[3,2,1,""],set_metadata:[3,2,1,""],size_c:[3,2,1,""],size_t:[3,2,1,""],size_x:[3,2,1,""],size_y:[3,2,1,""],size_z:[3,2,1,""]},"aicsimageio.writers.png_writer":{PngWriter:[3,1,1,""]},"aicsimageio.writers.png_writer.PngWriter":{close:[3,2,1,""],save:[3,2,1,""],save_slice:[3,2,1,""]},"aicsimageio.writers.writer":{Writer:[3,1,1,""]},"aicsimageio.writers.writer.Writer":{close:[3,2,1,""],save:[3,2,1,""]},aicsimageio:{aics_image:[0,0,0,"-"],buffer_reader:[0,0,0,"-"],constants:[0,0,0,"-"],dask_utils:[0,0,0,"-"],exceptions:[0,0,0,"-"],readers:[1,0,0,"-"],transforms:[0,0,0,"-"],types:[0,0,0,"-"],vendor:[2,0,0,"-"],writers:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception","6":"py:data"},terms:{"11th":0,"14th":2,"2a0ccf12":2,"2nd":0,"43e6":2,"44d4":2,"4c10":2,"4d6c":2,"4e39fc063aa1":2,"5d57aac9":2,"8efe3e71":2,"93d9":2,"97de":2,"abstract":[1,3],"break":4,"byte":[0,1],"case":1,"catch":1,"class":[0,1,2,3,4,6],"default":[0,1,2,3,4],"float":[1,2],"function":[0,1,3,4],"import":[4,6],"int":[0,1,2],"new":[0,2,5],"public":7,"return":[0,1,2,3,4,6],"short":5,"static":[0,1],"throw":3,"true":[2,3],For:[0,2,6],IDs:2,OME:[1,2,3,4,6],Ome:0,The:[0,1,2,3,6,7],Then:5,There:2,These:[0,2],Use:2,Using:3,Will:3,a08:2,a3b1:2,a7f81fa67c9d:2,abc:[1,3],abov:6,accept:0,access:0,accident:4,accompani:3,acquir:2,acquisit:2,acquisitiond:2,across:0,action:[3,4],actual:2,add:[0,2,4,5],add_original_metadata:2,added:[0,1,4],addit:6,address:[0,6],admin:4,after:4,aics_imag:8,aicsimag:[0,4,6],aicsimageio:[5,7],aicspylibczi:1,alia:0,all:[0,1,4,5],allencellmodel:[6,7],allow:[3,4],alreadi:3,also:5,alwai:[1,2,5,6,7],anaconda:5,ani:[0,1,2,6],annot:2,anoth:1,api:2,appear:2,append_channel:2,appreci:5,appropri:0,arbitrari:[0,3],arduou:2,argument:[0,6],around:1,arrai:[0,1,2,3,6],arraylik:0,arraylike_read:[0,8],arraylikeread:1,artist:2,assign:0,assum:[0,1,2,3],attach:2,attempt:0,attribut:2,auto:4,b03:2,b6a2:2,b6c1:2,back:[2,4],backend:1,badg:4,base:[0,1,2,3,6],becaus:1,befor:4,begin:2,behavior:6,being:[0,3],between:3,bfced776802d:2,bio:6,bioformat:2,bit:[2,5],bitspersampl:2,bland:2,block:[1,4],blue:2,bool:[0,1],branch:5,brown:4,bsd:6,buffer:[0,1],buffer_read:8,bufferediobas:[0,1],bufferread:0,bug:4,bugfix:[4,5],build:[4,5],bumpvers:4,bytearrai:1,c437:2,call:[2,4],caller:2,can:[0,2,3,5,7],cannot:0,capabl:1,cast:2,celllength:2,cellprofil:2,cellwidth:2,certain:0,cfg:4,chain:6,chang:[2,5],channel:[0,2,3,6],channel_color:3,channel_count:2,channel_nam:3,channels_nam:0,cheapli:0,check:[0,4,5],checkout:5,child:0,choic:6,chunk:1,chunk_by_dim:[0,1],classmethod:1,claus:6,clean:4,client:[0,1],clone:[5,7],close:[0,1,3,4],cluster:[0,1,4],cluster_and_cli:[0,6],cmyk:2,code:[2,4,6],code_of_conduct:4,codecov:4,collect:[0,2],color:[2,3],column:2,columnnamingconvent:2,com:[5,6,7],command:[4,7],comment:4,commit:5,commun:0,compar:2,compon:2,comput:[0,6],configur:0,conflict:0,conflictingargumentserror:0,connect:[0,1,6],consist:0,constant:[2,8],construct:[0,1,3],constructor:[0,2],contain:[0,2],content:8,context:[0,2,3,6],contribut:[4,6],convent:2,convert:3,cookiecutt:4,copi:[4,7],core:[0,1],count:2,cov:4,coverag:4,creat:[0,1,2,5,6],creation:3,credit:5,cron:4,curl:7,current:[0,2],cyx:[0,3],czi:[0,1,3,6],czi_read:[0,8],cziread:[0,1,3,4,6],czyx:[0,6],d096:2,daca46f16346:2,dan:4,daniel:4,dask:[0,1,4],dask_data:[0,1,6],dask_kwarg:[0,1,6],dask_util:[6,8],data:[0,1,2,3,6],datatyp:2,date:2,datetim:2,deal:0,default_dim:0,default_read:[0,8],defaultord:0,defaultorderlist:0,defaultread:[0,1,6],delai:[0,1],delta:2,deltat:2,depend:[1,6],deploi:0,depth:[0,2],deriv:2,derivedwrit:3,descript:[1,2,5],desir:0,detail:5,determine_read:0,dev:5,develop:[2,4,5],dict:[0,1,2],dictionari:[0,2],dictionary_index:2,differ:[1,6],dim:[0,1,3,4,6],dimens:[0,1,2,3,4,6],dimension:[0,2,6],dimension_ord:[3,4],dimensionord:2,direct:2,directli:0,distribut:0,do_:2,do_xytzc:2,do_xyzct:2,doc:[2,4],document:[2,4],doe:[3,4],doesn:[0,2,3,4],dom:2,don:[2,6,7],done:[3,5],doubl:4,down:[0,1],download:7,dtype:1,duck:1,ducktyp:2,durat:[0,2,6],dure:6,each:[0,1,2,3,6],easi:2,edit:5,ef8af211:2,either:[0,2,7],element:[1,2],elementtre:2,empti:0,enabl:1,encod:2,enough:0,entir:0,environ:5,error:2,etc:0,etre:4,everi:5,exactli:3,exampl:[0,2,3],except:8,exist:[2,3,4],experi:2,explor:2,exposur:2,exposuretim:2,extend:0,extens:0,extent:2,externaldescript:2,externalidentifi:2,extra:[0,1],fail:[1,4],fals:[0,3],fast:6,featur:[4,5],feedback:4,field:0,file2:3,file3:3,file:[0,1,2,3,4,5,6],file_path:3,filelik:1,filenam:[0,2,6],filepath:0,fill:0,fillord:2,filter:2,first:1,firstc:2,firstt:2,firstz:2,flag:3,fork:5,format:[2,3,6],found:[2,5,6],four:2,fourth:0,free:6,freebytecount:2,freeoffset:2,from:[0,1,2,4,6],full:3,gen:4,gener:[0,2,4],get:[0,2,6],get_acquisitiond:2,get_channel_count:2,get_channel_nam:[0,1,2,4,6],get_color:2,get_column:2,get_columnnamingconvent:2,get_deltat:2,get_descript:2,get_dimensionord:2,get_externaldescript:2,get_externalidentifi:2,get_firstc:2,get_firstt:2,get_firstz:2,get_float_attr:2,get_id:2,get_ifd:2,get_image_count:2,get_image_dask_data:[0,6],get_image_data:[0,6],get_image_descript:1,get_imageref:2,get_index:2,get_int_attr:2,get_n:2,get_nam:2,get_namespac:2,get_original_metadata_ref:2,get_original_metadata_valu:2,get_physical_pixel_s:1,get_physicalsizei:2,get_physicalsizex:2,get_physicalsizez:2,get_pixel_typ:2,get_pixeltyp:2,get_plane_count:2,get_planecount:2,get_planes_of_channel:2,get_positioni:2,get_positionx:2,get_positionz:2,get_row:2,get_rownamingconvent:2,get_sampl:2,get_samplesperpixel:2,get_sizec:2,get_sizei:2,get_sizet:2,get_sizex:2,get_sizez:2,get_statu:2,get_text:2,get_thec:2,get_thet:2,get_thez:2,get_timepoint:2,get_wel:2,get_well_nam:2,get_wellorigini:2,get_welloriginx:2,getter:4,git:[2,5,6,7],github:[4,5,6,7],given:[0,2,5],given_dim:0,good:6,grayresponsecurv:2,grayresponseunit:2,greatli:5,green:2,guess:0,guess_dim_ord:1,gui:6,guid:7,handl:[0,2,5,6],has:[0,1,2,6],has_kei:2,has_original_metadata:2,have:[0,2,4,7],head:6,help:5,here:[5,6],higher:1,hold:2,hook:2,hostcomput:2,how:[2,5],howev:1,html:[2,4,5],http:[2,6,7],ids:2,ifd:2,imag:[0,1,2,3],image0:3,image2:3,image_count:2,image_nam:3,imageio:[1,6],imagelength:2,imagelik:[0,1],imageref:2,imagewidth:2,img1:[0,6],img2:[0,6],img3:6,img40_1:2,img:[0,1,6],implement:6,imread:[0,4,6],imread_dask:[0,6],includ:[2,4,5],inconsistentshapeerror:0,indent:2,index:[0,2,3,6],indic:2,infer:2,inform:6,initi:[0,2,6],inkset:2,input:0,insert:[2,3],insid:3,inspect:2,instal:[0,5],instanc:[0,2],instead:6,intel_endian:0,intend:0,intent:0,interfac:[0,1,2,3],interleav:2,interpret:2,invalid:[0,4],invaliddimensionorderingerror:0,invok:2,ioerror:3,is_om:1,is_this_typ:1,iso:2,item:2,iter:2,iter_original_metadata:2,iteritem:2,its:[2,4],jackson:4,jacksonmaxfield:4,jami:4,just:6,keep:6,kei:2,keyword:0,know:6,known:[0,4],known_dim:[0,4],kwarg:[0,1,3,6],label:4,larg:1,latest:4,launch:6,lazi:0,lazy_data:6,lazy_s0t0:6,least:2,left:0,less:2,let:2,letter:[0,2],level:[1,2],librari:[1,2,6],lifespan:6,like:[2,6],link:4,lint:[4,5],linter:4,list:[0,1,2,6],littl:5,live:0,load:[0,1,3],load_slic:1,loadresult:0,local:[0,4,5,6],localclust:[0,1],localhost:[0,6],locat:[2,3],look:2,lxml:1,m2r:5,made:2,mai:6,main:2,maintain:5,make:[2,3,4,5,6],make_text_nod:2,makefil:4,manag:[0,3,6],mani:2,map:1,master:[4,7],match:[0,2],matt:4,max:2,maxsamplevalu:2,mean:0,mechan:2,memori:[0,1],messag:0,metadata:[0,1,2,3,4],method:[2,7],microscopi:0,min:2,minsamplevalu:2,miss:0,mode:5,model:2,modif:2,modifi:2,modul:[4,6,8],more:0,most:[2,7],motorola_endian:0,move:4,mpi_cmyk:2,multi:6,multipl:0,must:0,my_fil:[0,6],myimag:2,mymetadata:3,n_byte:0,name:[0,2,3,4,6],namespac:2,napari:0,nativ:1,ndarrai:[0,1,3],necessari:3,need:[0,2,4],newlin:2,newplat:2,newsubfiletyp:2,node:2,none:[0,2,3,4],normal:6,note:[0,1],noth:3,now:5,npdtype:2,number:[0,2],numpi:[0,1,3,6],nworker:[0,6],object:[0,2,3,6],off:6,often:2,old:4,om_:2,om_artist:2,om_bits_per_sampl:2,om_cell_length:2,om_cell_width:2,om_date_tim:2,om_document_nam:2,om_fill_ord:2,om_free_bytecount:2,om_free_offset:2,om_gray_response_curv:2,om_gray_response_unit:2,om_host_comput:2,om_image_length:2,om_image_width:2,om_ink_set:2,om_mak:2,om_max_sample_valu:2,om_min_sample_valu:2,om_model:2,om_new_subfile_typ:2,om_orient:2,om_page_numb:2,om_photometric_interpret:2,om_predictor:2,om_resolution_unit:2,om_samples_per_pixel:2,om_softwar:2,om_t4_opt:2,om_t6_opt:2,om_threshhold:2,om_tile_byte_count:2,om_tile_length:2,om_tile_offset:2,om_tile_width:2,om_transfer_funct:2,om_white_point:2,om_x_posit:2,om_x_resolut:2,om_y_posit:2,om_y_resolut:2,ome:[0,2,3,4,6],ome_metadata:3,ome_tiff_read:[0,8],ome_tiff_writ:[0,8],ome_xml:3,omemetadata:2,ometiffread:[0,1,6],ometiffwrit:3,omexml:[0,3,8],onc:[3,7],one:[0,1,2],onli:[0,2,6],open:[1,3],openmicroscopi:2,oper:0,option:[0,1,2],order:[0,1,2,3,4,6],org:2,orient:2,origin:[2,5],originalmetadata:2,orphan:2,other:[0,2,3,5],our:2,out:[0,2,3],out_orient:0,output:[2,3],outsid:6,over:[2,3,4],overwrit:3,overwrite_fil:3,packag:[5,6,8],pad:0,page:[2,6],page_name_original_metadata:2,pagenumb:2,pair:2,paramet:[0,1,3],parent:2,pars:[0,2,4],parser:6,particular:2,pass:[0,3,4,5,6],patch:4,path:[0,1,3],pathlib:[0,1,3],pathlik:3,pc_planar:2,per:2,perform:3,persist:6,photometr:2,physic:[2,3,4],physicalsizei:2,physicalsizex:2,physicalsizez:2,pi_cfa_arrai:2,pin:4,pip:[5,6,7],pixel:[2,3,4],pixels_physical_s:3,pixeltyp:2,place:1,planar:2,plane:[1,2],plane_count:2,planecount:2,plate:2,plate_id:2,platesducktyp:2,pleas:6,png:[3,4],png_writer:[0,8],pngwriter:3,point:[3,4],populate_tiffdata:[2,4],portion:6,posit:2,positioni:2,positionx:2,positionz:2,pragmat:2,preconfigur:[0,1],predictor:2,prefer:7,premad:3,prepar:5,present:[0,1,2],pretti:6,print:[2,6],process:[0,1,7],programat:2,project:5,prone:2,proper:3,properli:[3,4],properti:[0,1,2],provid:[0,1,2],prs:4,prune:0,pt_:2,pt_uint8:2,publish:[4,5],pull:[4,5,6],pure:0,purpos:2,push:5,put:[0,3],py38:4,pypi:[4,5],python:[2,4,5,6,7],qualifi:2,quickstart:4,quilt3distribut:4,quot:4,rand:0,random:0,rapidli:2,raw:[0,5],read:[0,1,2,5],read_byt:0,read_uint16:0,read_uint32:0,read_uint64:0,reader:[0,3,4,6,8],readi:5,readm:4,recent:7,recogn:0,recommend:5,red:2,refactor:4,refer:[2,4],rel:2,relat:6,releas:[5,6],remind:5,remot:4,remov:[0,1,2,4],remove_channel:2,renam:4,replac:2,repo:[5,7],report:4,repositori:7,repres:[0,2],represent:2,request:[0,4,5],requir:4,reset:0,reshap:0,reshape_data:0,resolutionunit:2,resolv:[4,5],respect:4,retriev:[1,2],return_dim:0,revert:4,review:4,revis:4,rgb:[0,2,3],rgba:0,right:0,root:2,root_nod:2,rootnod:2,row:2,rownamingconvent:2,rst:4,run:[5,7],rundown:6,s0t0:6,same:[0,1,3,6],sampl:2,samplesperpixel:2,save:3,save_slic:3,scene:[0,1,6],schema:2,search:[2,6],second:2,see:[0,2,6],select:1,self:0,seri:2,serializ:4,set:[2,5],set_acquisitiond:2,set_channel_count:2,set_color:2,set_column:2,set_columnnamingconvent:2,set_deltat:2,set_descript:2,set_dimensionord:2,set_externaldescript:2,set_externalidentifi:2,set_firstc:2,set_firstt:2,set_firstz:2,set_id:2,set_ifd:2,set_image_count:2,set_imageref:2,set_index:2,set_metadata:3,set_nam:2,set_physicalsizei:2,set_physicalsizex:2,set_physicalsizez:2,set_pixeltyp:2,set_plane_count:2,set_planecount:2,set_positioni:2,set_positionx:2,set_positionz:2,set_row:2,set_rownamingconvent:2,set_samplesperpixel:2,set_sizec:2,set_sizei:2,set_sizet:2,set_sizex:2,set_sizez:2,set_statu:2,set_text:2,set_thec:2,set_thet:2,set_thez:2,set_timepoint:2,set_wellorigini:2,set_welloriginx:2,setup:[4,7],shape:[0,1,6],sherman:4,should:[0,2,3,4],shuffl:0,shutdown:[0,6],shutdown_cluster_and_cli:0,silent:3,similar:6,simpli:[0,1,6],sinc:2,site:2,six:[0,6],size:[0,2,3,4,6],size_:[0,1],size_c:[0,1,3],size_i:[0,1,3],size_t:[0,1,3],size_x:[0,1,3],size_z:[0,1,3],sizec:2,sizei:2,sizet:2,sizex:2,sizez:2,slice:[0,3],slice_index:1,softwar:[2,6],some:[2,6],sourc:[0,1,2,3],spatial:0,spatiali:[0,1],spatialx:[0,1],spatialz:[0,1],spawn:6,spawn_cluster_and_cli:0,specif:[0,1,2,6],specifi:[0,1,2,3,6],split:2,split_qn:2,spw:2,src:2,stabl:[5,6],stack_count:2,stage:2,standard:0,statu:2,stc:6,stczyx:[0,3,6],store:2,str:[0,1,3],strictli:1,string:[0,1,2,4,6],structur:2,structured_annot:2,structuredannot:2,stzcyx:3,subclass:0,submit:5,submodul:8,subpackag:8,subsequ:0,suppli:2,support:[0,2,6],supported_read:0,sure:5,t4option:2,t6option:2,tag:[2,5],tag_nam:2,take:[0,3],tarbal:7,task:4,tcp:[0,6],tczyx:0,team:4,templat:4,tend:6,termin:7,test:[4,5],test_ome_tiff_writ:4,text:2,than:2,thec:2,thei:5,them:[0,2,3],thet:2,thez:2,thi:[0,1,2,3,5,6,7],thing:2,those:6,three:2,threshhold:2,through:[5,7],thrown:0,tie:2,tif:[2,3],tiff:[0,1,2,3,4,5,6],tiff_read:[0,8],tiffdata:2,tifffil:1,tiffread:[0,1,6],tilebytecount:2,tilelength:2,tileoffset:2,tilewidth:2,time:[0,2,6],timepoint:2,timepoint_count:2,to_xml:2,todo:3,toloudi:4,top:2,trade:6,transferfunct:2,transform:8,transpose_to_dim:0,tree:1,trigger:4,tupl:[0,1,6],two:[2,3],type:[1,2,3,6,8],typic:2,tzcyx:1,unabl:2,unicod:2,unifi:[0,1],union:[0,1,3],unit:[2,4],unsupportedfileformaterror:0,updat:4,upstream:5,urn:2,use:[0,1,2,3,4,6],useabl:6,used:[0,2],useful:6,user:[0,6],uses:[1,6],using:[0,1,2,6],utf:2,uuid:2,valid:0,valu:[2,3],vari:[0,2],variabl:0,vbtcxzy:0,vendor:[0,8],version:[4,5],view:2,view_imag:6,view_napari:[0,6],viewer:0,virtualenv:5,visit:6,wai:2,want:6,warn:0,websit:5,welcom:5,well:[0,1,2],well_id:2,well_nod:2,wellorigini:2,welloriginx:2,wellsampl:2,wellsample_id:2,wellsampleducktyp:2,wellsducktyp:2,were:4,when:[0,5,6],where:[1,2],which:[0,2],whitepoint:2,within:[2,3],without:0,work:[5,6],workflow:4,would:0,wrap:[1,2,4],wrapper:1,write:[2,3,6],writer2:3,writer3:3,writer:[0,4,8],written:3,www:2,xml:[2,3],xposit:2,xresolut:2,xsd:2,xsd_now:2,xytzc:2,you:[2,5,6,7],your:[5,6,7],your_development_typ:5,your_name_her:5,yourself:2,yposit:2,yresolut:2,zeiss_10byt:1,zeiss_2byt:1,zero:2,zisrawfil:1,zstack_t8:0,zstack_t8_data:0,zyx:0},titles:["aicsimageio package","aicsimageio.readers package","aicsimageio.vendor package","aicsimageio.writers package","Changelog","Contributing","Welcome to aicsimageio\u2019s documentation!","Installation","aicsimageio"],titleterms:{"new":4,aics_imag:0,aicsimageio:[0,1,2,3,6,8],arraylike_read:1,buffer_read:0,changelog:4,client:6,cluster:6,constant:0,content:[0,1,2,3],contribut:5,czi_read:1,dask:6,dask_util:0,default_read:1,delai:6,deploi:5,develop:6,document:6,except:0,featur:6,fix:4,from:7,full:6,get:5,imag:6,indic:6,instal:[6,7],interact:6,metadata:6,modul:[0,1,2,3],napari:6,note:6,ome_tiff_read:1,ome_tiff_writ:3,omexml:2,other:4,packag:[0,1,2,3],png_writer:3,process:6,quick:6,read:6,reader:1,releas:7,slice:6,sourc:7,speed:6,stabl:7,start:[5,6],submodul:[0,1,2,3],subpackag:0,tabl:6,tiff_read:1,transform:0,type:0,unreleas:4,vendor:2,viewer:6,welcom:6,writer:3}})